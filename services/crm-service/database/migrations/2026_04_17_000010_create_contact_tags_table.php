<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('contact_tags', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('org_id')->index();
            $table->string('name', 255);
            $table->text('description')->nullable();
            $table->string('color', 10)->nullable();
            $table->jsonb('metadata')->default('{}');
            $table->timestamps();

            $table->index(['org_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('contact_tags');
    }
};
