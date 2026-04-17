<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('org_id')->index();
            $table->string('created_by_user_id', 80)->index();
            $table->string('name', 200);
            $table->string('email', 255)->nullable()->index();
            $table->string('phone', 40)->nullable()->index();
            $table->jsonb('metadata')->default('{}');
            $table->timestamps();

            $table->index(['org_id', 'created_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};

