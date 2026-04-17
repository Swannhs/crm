<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable([
    'id', 'pipeline_id', 'stage_id', 'contact_id', 'org_id', 
    'opportunity_value_cents', 'order', 'added_at', 'metadata'
])]
class PipelineContact extends Model
{
    public $incrementing = false;
    protected $keyType = 'string';
    protected $table = 'pipeline_contacts';

    protected function casts(): array
    {
        return [
            'metadata' => 'array',
            'added_at' => 'datetime',
        ];
    }

    public function pipeline(): BelongsTo
    {
        return $this->belongsTo(Pipeline::class);
    }

    public function stage(): BelongsTo
    {
        return $this->belongsTo(PipelineStage::class, 'stage_id');
    }

    public function contact(): BelongsTo
    {
        return $this->belongsTo(Contact::class);
    }
}
