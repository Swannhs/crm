<?php

namespace App\Http\Controllers;

use App\Contracts\MagentoClientContract;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use RuntimeException;

class MagentoController extends Controller
{
    public function __construct(private readonly MagentoClientContract $magentoClient)
    {
    }

    public function health(): JsonResponse
    {
        try {
            $data = $this->magentoClient->restGet('/rest/all/V1/store/storeConfigs');
            return response()->json([
                'status' => 'ok',
                'service' => 'magento-integration-service',
                'connected' => true,
                'storesCount' => is_array($data) ? count($data) : 0,
                'magentoBaseUrl' => config('services.magento.base_url'),
                'authMode' => config('services.magento.access_token') ? 'access_token' : 'admin_credentials',
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 'degraded',
                'service' => 'magento-integration-service',
                'connected' => false,
                'magentoBaseUrl' => config('services.magento.base_url'),
                'authMode' => config('services.magento.access_token') ? 'access_token' : 'admin_credentials',
                'error' => $e->getMessage(),
            ], 200);
        }
    }

    public function orders(Request $request): JsonResponse
    {
        return $this->proxyRest('/rest/' . config('services.magento.store_code', 'default') . '/V1/orders', [
            'searchCriteria[pageSize]' => (int) $request->query('pageSize', 20),
            'searchCriteria[currentPage]' => (int) $request->query('currentPage', 1),
            'searchCriteria[sortOrders][0][field]' => 'created_at',
            'searchCriteria[sortOrders][0][direction]' => 'DESC',
        ]);
    }

    public function products(Request $request): JsonResponse
    {
        $query = [
            'searchCriteria[pageSize]' => (int) $request->query('pageSize', 20),
            'searchCriteria[currentPage]' => (int) $request->query('currentPage', 1),
        ];

        $search = trim((string) $request->query('search', ''));
        if ($search !== '') {
            $query['searchCriteria[filter_groups][0][filters][0][field]'] = 'name';
            $query['searchCriteria[filter_groups][0][filters][0][value]'] = '%' . $search . '%';
            $query['searchCriteria[filter_groups][0][filters][0][condition_type]'] = 'like';
        }

        return $this->proxyRest('/rest/' . config('services.magento.store_code', 'default') . '/V1/products', $query);
    }

    public function customers(Request $request): JsonResponse
    {
        return $this->proxyRest('/rest/' . config('services.magento.store_code', 'default') . '/V1/customers/search', [
            'searchCriteria[pageSize]' => (int) $request->query('pageSize', 20),
            'searchCriteria[currentPage]' => (int) $request->query('currentPage', 1),
        ]);
    }

    public function graphql(Request $request): JsonResponse
    {
        $query = (string) $request->input('query', '');
        $variables = (array) $request->input('variables', []);
        $operationName = $request->input('operationName');

        if ($query === '') {
            return response()->json(['message' => 'query is required'], 422);
        }

        try {
            $data = $this->magentoClient->graphql($query, $variables, is_string($operationName) ? $operationName : null);
            return response()->json(['data' => $data]);
        } catch (ConnectionException $e) {
            return response()->json(['message' => 'Magento connection failed', 'error' => $e->getMessage()], 502);
        } catch (RuntimeException $e) {
            return response()->json(['message' => 'Magento request failed', 'error' => $e->getMessage()], 502);
        }
    }

    public function restGetAny(Request $request, string $path): JsonResponse
    {
        return $this->proxyRestAny('get', $path, [], $request->query());
    }

    public function restPostAny(Request $request, string $path): JsonResponse
    {
        return $this->proxyRestAny('post', $path, (array) $request->input('payload', []), $request->query());
    }

    public function restPutAny(Request $request, string $path): JsonResponse
    {
        return $this->proxyRestAny('put', $path, (array) $request->input('payload', []), $request->query());
    }

    public function restDeleteAny(Request $request, string $path): JsonResponse
    {
        return $this->proxyRestAny('delete', $path, [], $request->query());
    }

    private function proxyRest(string $path, array $query): JsonResponse
    {
        try {
            $data = $this->magentoClient->restGet($path, $query);
            return response()->json(['data' => $data]);
        } catch (ConnectionException $e) {
            if ($fallback = $this->buildOfflineFallback($path, $query)) {
                return response()->json($fallback);
            }
            return response()->json(['message' => 'Magento connection failed', 'error' => $e->getMessage()], 502);
        } catch (RuntimeException $e) {
            return response()->json(['message' => 'Magento request failed', 'error' => $e->getMessage()], 502);
        }
    }

    private function proxyRestAny(string $method, string $path, array $payload = [], array $query = []): JsonResponse
    {
        $normalizedPath = $this->normalizeMagentoPath($path);

        try {
            $data = match ($method) {
                'get' => $this->magentoClient->restGet($normalizedPath, $query),
                'post' => $this->magentoClient->restPost($normalizedPath, $payload, $query),
                'put' => $this->magentoClient->restPut($normalizedPath, $payload, $query),
                'delete' => $this->magentoClient->restDelete($normalizedPath, $query),
                default => throw new RuntimeException("Unsupported REST method: $method"),
            };

            return response()->json(['data' => $data]);
        } catch (ConnectionException $e) {
            if ($fallback = $this->buildOfflineFallback($normalizedPath, $query)) {
                return response()->json($fallback);
            }
            return response()->json(['message' => 'Magento connection failed', 'error' => $e->getMessage()], 502);
        } catch (RuntimeException $e) {
            return response()->json(['message' => 'Magento request failed', 'error' => $e->getMessage()], 502);
        }
    }

    private function normalizeMagentoPath(string $path): string
    {
        $trimmed = ltrim(trim($path), '/');

        if ($trimmed === '') {
            throw new RuntimeException('Magento REST path cannot be empty');
        }

        if (!Str::startsWith($trimmed, 'rest/')) {
            return '/rest/' . $trimmed;
        }

        return '/' . $trimmed;
    }

    private function buildOfflineFallback(string $path, array $query): ?array
    {
        if (!app()->environment('local')) {
            return null;
        }

        $normalizedPath = strtolower($path);

        if (str_contains($normalizedPath, '/v1/orders')) {
            return [
                'data' => [
                    'items' => [],
                    'search_criteria' => [
                        'current_page' => (int) ($query['searchCriteria[currentPage]'] ?? 1),
                        'page_size' => (int) ($query['searchCriteria[pageSize]'] ?? 20),
                    ],
                    'total_count' => 0,
                ],
                'fallback' => true,
            ];
        }

        if (str_contains($normalizedPath, '/v1/products')) {
            return [
                'data' => [
                    'items' => [],
                    'search_criteria' => [
                        'current_page' => (int) ($query['searchCriteria[currentPage]'] ?? 1),
                        'page_size' => (int) ($query['searchCriteria[pageSize]'] ?? 20),
                    ],
                    'total_count' => 0,
                ],
                'fallback' => true,
            ];
        }

        if (str_contains($normalizedPath, '/v1/categories')) {
            return [
                'data' => [
                    'id' => 0,
                    'name' => 'Root Catalog',
                    'is_active' => true,
                    'position' => 0,
                    'level' => 0,
                    'product_count' => 0,
                    'children_data' => [],
                ],
                'fallback' => true,
            ];
        }

        return null;
    }
}
