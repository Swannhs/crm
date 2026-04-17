<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['id', 'org_id', 'name', 'description', 'color', 'metadata'])]
class ContactTag extends Model
{
    public $incrementing = false;
    protected $keyType = 'string';
    protected $table = 'contact_tags';

    protected function casts(): array
    {
        return ['metadata' => 'array'];
    }
}
