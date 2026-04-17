<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable([
    'id', 'pipeline_id', 'name', 'order', 'color', 'metadata'
])]
class PipelineStage extends Model
{
    public $incrementing = false;
    protected $keyType = 'string';
    protected $table = 'pipeline_stages';

    protected function casts(): array
    {
        return [
            'metadata' => 'array',
        ];
    }

    public function pipeline(): BelongsTo
    {
        return $this->belongsTo(Pipeline::class);
    }

    public function contacts(): HasMany
    {
        return $this->hasMany(PipelineContact::class, 'stage_id');
    }
}
