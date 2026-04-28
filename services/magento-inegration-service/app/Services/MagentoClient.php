<?php

namespace App\Services;

use App\Contracts\MagentoClientContract;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Client\PendingRequest;
use Illuminate\Http\Client\Response;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use RuntimeException;

class MagentoClient implements MagentoClientContract
{
    private const TOKEN_CACHE_KEY = 'magento_admin_token';

    private function config(string $key, mixed $default = null): mixed
    {
        return config("services.magento.$key", $default);
    }

    private function baseUrl(): string
    {
        return rtrim((string) $this->config('base_url', 'http://magento'), '/');
    }

    private function timeout(): int
    {
        return (int) $this->config('timeout_seconds', 20);
    }

    private function requestWithToken(string $token): PendingRequest
    {
        return Http::timeout($this->timeout())
            ->withHeaders([
                'Authorization' => "Bearer $token",
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
            ]);
    }

    public function getAdminToken(): string
    {
        $staticToken = (string) $this->config('access_token', '');
        if ($staticToken !== '') {
            return $staticToken;
        }

        return Cache::remember(self::TOKEN_CACHE_KEY, now()->addMinutes(50), function (): string {
            $username = (string) $this->config('admin_username', 'admin');
            $password = (string) $this->config('admin_password', 'admin123');

            $response = Http::timeout($this->timeout())
                ->post("{$this->baseUrl()}/rest/V1/integration/admin/token", [
                    'username' => $username,
                    'password' => $password,
                ]);

            if (!$response->ok()) {
                throw new RuntimeException("Failed to get Magento admin token ({$response->status()})");
            }

            $token = trim((string) $response->body(), "\" \n\r\t");
            if ($token === '') {
                throw new RuntimeException('Magento admin token response was empty');
            }

            return $token;
        });
    }

    /**
     * @throws ConnectionException|RuntimeException
     */
    public function restGet(string $path, array $query = []): array
    {
        $token = $this->getAdminToken();
        $url = "{$this->baseUrl()}{$path}";
        $response = $this->requestWithToken($token)->get($url, $query);

        if ($response->status() === 401) {
            Cache::forget(self::TOKEN_CACHE_KEY);
            $token = $this->getAdminToken();
            $response = $this->requestWithToken($token)->get($url, $query);
        }

        return $this->decodeResponse($response);
    }

    /**
     * @throws ConnectionException|RuntimeException
     */
    public function graphql(string $query, array $variables = [], ?string $operationName = null): array
    {
        $token = $this->getAdminToken();
        $response = $this->requestWithToken($token)->post(
            "{$this->baseUrl()}/graphql",
            [
                'query' => $query,
                'variables' => $variables,
                'operationName' => $operationName,
            ]
        );

        if ($response->status() === 401) {
            Cache::forget(self::TOKEN_CACHE_KEY);
            $token = $this->getAdminToken();
            $response = $this->requestWithToken($token)->post(
                "{$this->baseUrl()}/graphql",
                [
                    'query' => $query,
                    'variables' => $variables,
                    'operationName' => $operationName,
                ]
            );
        }

        return $this->decodeResponse($response);
    }

    private function decodeResponse(Response $response): array
    {
        if (!$response->ok()) {
            throw new RuntimeException("Magento request failed ({$response->status()}): " . $response->body());
        }

        $data = $response->json();
        return is_array($data) ? $data : ['raw' => $response->body()];
    }
}
