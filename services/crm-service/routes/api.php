<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\PipelineController;
use App\Http\Controllers\HealthController;
use Illuminate\Support\Facades\Route;

Route::get('/healthz', HealthController::class);
Route::get('/readyz', HealthController::class);

Route::prefix('v1')
    ->middleware('identity.context')
    ->group(function (): void {
        // Contact endpoints
        Route::get('/contacts', [ContactController::class, 'index']);
        Route::post('/contacts', [ContactController::class, 'store']);
        Route::post('/contacts/merge', [ContactController::class, 'merge']);
        Route::post('/contacts/import', [ContactController::class, 'import']);
        Route::get('/contacts/search', [ContactController::class, 'search']);
        Route::get('/contacts/statistics', [ContactController::class, 'statistics']);
        Route::get('/contacts/{contact}', [ContactController::class, 'show']);
        Route::patch('/contacts/{contact}', [ContactController::class, 'update']);
        Route::delete('/contacts/{contact}', [ContactController::class, 'destroy']);

        // Pipeline endpoints
        Route::get('/pipelines', [PipelineController::class, 'index']);
        Route::post('/pipelines', [PipelineController::class, 'store']);
        Route::get('/pipelines/{pipeline}', [PipelineController::class, 'show']);
        Route::patch('/pipelines/{pipeline}', [PipelineController::class, 'update']);
        Route::delete('/pipelines/{pipeline}', [PipelineController::class, 'destroy']);
        Route::get('/pipelines/{pipeline}/view', [PipelineController::class, 'pipelineView']);

        // Pipeline contact endpoints
        Route::post('/pipelines/contacts/add', [PipelineController::class, 'addContact']);
        Route::post('/pipeline-contacts/{pipelineContact}/move', [PipelineController::class, 'moveContact']);
    });

