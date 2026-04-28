<?php

namespace App\Http\Controllers;

use App\Contracts\MagentoClientContract;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
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
                'service' => 'magento-inegration-service',
                'connected' => true,
                'storesCount' => is_array($data) ? count($data) : 0,
                'magentoBaseUrl' => config('services.magento.base_url'),
                'authMode' => config('services.magento.access_token') ? 'access_token' : 'admin_credentials',
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 'degraded',
                'service' => 'magento-inegration-service',
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

    private function proxyRest(string $path, array $query): JsonResponse
    {
        try {
            $data = $this->magentoClient->restGet($path, $query);
            return response()->json(['data' => $data]);
        } catch (ConnectionException $e) {
            return response()->json(['message' => 'Magento connection failed', 'error' => $e->getMessage()], 502);
        } catch (RuntimeException $e) {
            return response()->json(['message' => 'Magento request failed', 'error' => $e->getMessage()], 502);
        }
    }
}
