<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class HealthController extends Controller
{
    public function __invoke(): JsonResponse
    {
        return response()->json([
            'status' => 'ok',
            'service' => env('APP_NAME', 'crm-service'),
            'timestamp' => now()->toIso8601String(),
        ]);
    }
}

