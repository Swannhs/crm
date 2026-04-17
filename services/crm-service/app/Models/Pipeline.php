<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable([
    'id', 'org_id', 'created_by_user_id', 'name', 'description', 
    'status', 'shared_to_users', 'template_type', 'metadata'
])]
class Pipeline extends Model
{
    public $incrementing = false;
    protected $keyType = 'string';
    protected $table = 'pipelines';

    protected function casts(): array
    {
        return [
            'shared_to_users' => 'array',
            'metadata' => 'array',
        ];
    }

    public function stages(): HasMany
    {
        return $this->hasMany(PipelineStage::class);
    }

    public function contacts(): HasMany
    {
        return $this->hasMany(PipelineContact::class);
    }
}
