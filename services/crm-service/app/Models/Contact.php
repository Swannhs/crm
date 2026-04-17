<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'id', 'org_id', 'created_by_user_id', 
    'name', 'first_name', 'last_name', 'email', 'phone', 'dob', 'gender',
    'street', 'city', 'state', 'zip_code', 'country',
    'status', 'type', 'company_name', 'company_email', 'company_phone',
    'marketing_email_opt_in', 'marketing_sms_opt_in',
    'legacy_id', 'punch_id', 'hourly_rate', 'lead_source', 'lead_stage',
    'metadata'
])]
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

