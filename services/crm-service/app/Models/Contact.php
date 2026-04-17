<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['id', 'org_id', 'created_by_user_id', 'name', 'email', 'phone', 'metadata'])]
class Contact extends Model
{
    public $incrementing = false;

    protected $keyType = 'string';

    protected function casts(): array
    {
        return [
            'metadata' => 'array',
        ];
    }
}

