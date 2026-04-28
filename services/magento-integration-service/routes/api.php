<?php

use App\Http\Controllers\MagentoController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1/magento')->group(function () {
    Route::get('/health', [MagentoController::class, 'health']);

    // Common commerce endpoints
    Route::get('/orders', [MagentoController::class, 'orders']);
    Route::get('/products', [MagentoController::class, 'products']);
    Route::get('/customers', [MagentoController::class, 'customers']);
    Route::post('/graphql', [MagentoController::class, 'graphql']);

    // Full Magento REST passthrough (supports all V1 endpoints).
    // Path examples:
    // - /api/v1/magento/rest/default/V1/orders
    // - /api/v1/magento/rest/all/V1/products/attributes
    // - /api/v1/magento/rest/V1/inventory/sources
    Route::get('/rest/{path}', [MagentoController::class, 'restGetAny'])->where('path', '.*');
    Route::post('/rest/{path}', [MagentoController::class, 'restPostAny'])->where('path', '.*');
    Route::put('/rest/{path}', [MagentoController::class, 'restPutAny'])->where('path', '.*');
    Route::delete('/rest/{path}', [MagentoController::class, 'restDeleteAny'])->where('path', '.*');
});
