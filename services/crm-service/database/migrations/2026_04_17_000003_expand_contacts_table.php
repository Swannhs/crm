<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('contacts', function (Blueprint $table) {
            $table->string('first_name', 100)->nullable()->after('name');
            $table->string('last_name', 100)->nullable()->after('first_name');
            $table->date('dob')->nullable()->after('last_name');
            $table->string('gender', 20)->nullable()->after('dob');
            
            // Address
            $table->string('street', 255)->nullable()->after('gender');
            $table->string('city', 100)->nullable()->after('street');
            $table->string('state', 100)->nullable()->after('city');
            $table->string('zip_code', 20)->nullable()->after('state');
            $table->string('country', 100)->nullable()->after('zip_code');

            // Status & Type
            $table->string('status', 20)->default('active')->index()->after('country'); // active, inactive, pending
            $table->string('type', 20)->default('individual')->after('status'); // individual, company
            
            // Company info (if type is company)
            $table->string('company_name', 200)->nullable()->after('type');
            $table->string('company_email', 255)->nullable()->after('company_name');
            $table->string('company_phone', 40)->nullable()->after('company_email');

            // Marketing
            $table->boolean('marketing_email_opt_in')->default(true)->after('company_phone');
            $table->boolean('marketing_sms_opt_in')->default(false)->after('marketing_email_opt_in');

            // Legacy IDs (for migration purposes)
            $table->string('legacy_id', 50)->nullable()->index()->after('metadata');
            
            // Employee specific (nullable if not employee)
            $table->string('punch_id', 50)->nullable()->index()->after('legacy_id');
            $table->decimal('hourly_rate', 10, 2)->nullable()->after('punch_id');

            // Lead specific
            $table->string('lead_source', 100)->nullable()->index()->after('hourly_rate');
            $table->string('lead_stage', 100)->nullable()->index()->after('lead_source');
        });
    }

    public function down(): void
    {
        Schema::table('contacts', function (Blueprint $table) {
            $table->dropColumn([
                'first_name', 'last_name', 'dob', 'gender',
                'street', 'city', 'state', 'zip_code', 'country',
                'status', 'type', 'company_name', 'company_email', 'company_phone',
                'marketing_email_opt_in', 'marketing_sms_opt_in',
                'legacy_id', 'punch_id', 'hourly_rate', 'lead_source', 'lead_stage'
            ]);
        });
    }
};
