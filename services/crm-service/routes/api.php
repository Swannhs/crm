<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\HealthController;
use Illuminate\Support\Facades\Route;

Route::get('/healthz', HealthController::class);
Route::get('/readyz', HealthController::class);

Route::prefix('v1')
    ->middleware('identity.context')
    ->group(function (): void {
        Route::get('/contacts', [ContactController::class, 'index']);
        Route::post('/contacts', [ContactController::class, 'store']);
        Route::get('/contacts/{contact}', [ContactController::class, 'show']);
        Route::patch('/contacts/{contact}', [ContactController::class, 'update']);
        Route::delete('/contacts/{contact}', [ContactController::class, 'destroy']);
    });

