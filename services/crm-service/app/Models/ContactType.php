<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['id', 'org_id', 'name', 'description', 'color', 'metadata'])]
class ContactType extends Model
{
    public $incrementing = false;
    protected $keyType = 'string';
    protected $table = 'contact_types';

    protected function casts(): array
    {
        return ['metadata' => 'array'];
    }
}
