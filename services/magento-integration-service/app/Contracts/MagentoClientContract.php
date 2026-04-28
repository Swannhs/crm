<?php

namespace App\Contracts;

interface MagentoClientContract
{
    public function getAdminToken(): string;

    public function restGet(string $path, array $query = []): array;

    public function restPost(string $path, array $payload = [], array $query = []): array;

    public function restPut(string $path, array $payload = [], array $query = []): array;

    public function restDelete(string $path, array $query = []): array;

    public function graphql(string $query, array $variables = [], ?string $operationName = null): array;
}
