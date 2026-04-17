<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable([
    'id', 'contact_id', 'org_id', 'created_by_user_id', 'activity_type',
    'title', 'description', 'activity_date_time', 'metadata'
])]
class ContactActivity extends Model
{
    public $incrementing = false;
    protected $keyType = 'string';
    protected $table = 'contact_activities';

    protected function casts(): array
    {
        return [
            'metadata' => 'array',
            'activity_date_time' => 'datetime',
        ];
    }

    public function contact(): BelongsTo
    {
        return $this->belongsTo(Contact::class);
    }
}
