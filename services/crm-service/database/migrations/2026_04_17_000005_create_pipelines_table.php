<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pipelines', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('org_id')->index();
            $table->string('created_by_user_id', 80)->index();
            $table->string('name', 255);
            $table->text('description')->nullable();
            $table->string('status', 50)->default('active');
            $table->jsonb('shared_to_users')->default('[]');
            $table->string('template_type', 100)->nullable();
            $table->jsonb('metadata')->default('{}');
            $table->timestamps();

            $table->index(['org_id', 'created_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pipelines');
    }
};
