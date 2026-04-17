<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

#[Fillable([
    'id',
    'type',
    'version',
    'aggregate_type',
    'aggregate_id',
    'org_id',
    'actor_user_id',
    'payload',
    'occurred_at',
    'published_at',
])]
class OutboxEvent extends Model
{
    public $incrementing = false;

    protected $keyType = 'string';

    protected function casts(): array
    {
        return [
            'payload' => 'array',
            'occurred_at' => 'datetime',
            'published_at' => 'datetime',
        ];
    }

    public static function record(
        string $type,
        string $aggregateType,
        string $aggregateId,
        string $orgId,
        string $actorUserId,
        array $data,
        int $version = 1
    ): self {
        return self::query()->create([
            'id' => (string) Str::uuid(),
            'type' => $type,
            'version' => $version,
            'aggregate_type' => $aggregateType,
            'aggregate_id' => $aggregateId,
            'org_id' => $orgId,
            'actor_user_id' => $actorUserId,
            'payload' => [
                'data' => $data,
            ],
            'occurred_at' => now(),
        ]);
    }
}

