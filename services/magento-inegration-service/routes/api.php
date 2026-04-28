<?php

use App\Http\Controllers\MagentoController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1/magento')->group(function () {
    Route::get('/health', [MagentoController::class, 'health']);
    Route::get('/orders', [MagentoController::class, 'orders']);
    Route::get('/products', [MagentoController::class, 'products']);
    Route::get('/customers', [MagentoController::class, 'customers']);
    Route::post('/graphql', [MagentoController::class, 'graphql']);
});
