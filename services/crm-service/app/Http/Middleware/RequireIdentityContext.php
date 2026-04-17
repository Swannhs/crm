<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RequireIdentityContext
{
    public function handle(Request $request, Closure $next): Response
    {
        $userId = $request->header('X-User-Id');
        $orgId = $request->header('X-Org-Id');

        if (! is_string($userId) || $userId === '' || ! is_string($orgId) || $orgId === '') {
            return $this->unauthorized('Missing identity context headers.');
        }

        $request->attributes->set('user_id', $userId);
        $request->attributes->set('org_id', $orgId);

        return $next($request);
    }

    private function unauthorized(string $message): JsonResponse
    {
        return response()->json([
            'message' => $message,
        ], Response::HTTP_UNAUTHORIZED);
    }
}

