<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pipeline_contacts', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('pipeline_id')->index();
            $table->uuid('stage_id')->index();
            $table->uuid('contact_id')->index();
            $table->uuid('org_id')->index();
            $table->bigInteger('opportunity_value_cents')->default(0);
            $table->integer('order')->default(0);
            $table->timestamp('added_at')->nullable();
            $table->jsonb('metadata')->default('{}');
            $table->timestamps();

            $table->foreign('pipeline_id')->references('id')->on('pipelines')->onDelete('cascade');
            $table->foreign('stage_id')->references('id')->on('pipeline_stages')->onDelete('cascade');
            $table->foreign('contact_id')->references('id')->on('contacts')->onDelete('cascade');
            
            $table->index(['org_id', 'created_at']);
            $table->index(['stage_id', 'order']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pipeline_contacts');
    }
};
