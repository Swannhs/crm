<?php

namespace App\Contracts;

interface MagentoClientContract
{
    public function getAdminToken(): string;

    public function restGet(string $path, array $query = []): array;

    public function graphql(string $query, array $variables = [], ?string $operationName = null): array;
}
