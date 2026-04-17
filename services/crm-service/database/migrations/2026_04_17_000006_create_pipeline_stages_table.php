<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pipeline_stages', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('pipeline_id')->index();
            $table->string('name', 255);
            $table->integer('order')->default(0);
            $table->string('color', 10)->default('#3b82f6');
            $table->jsonb('metadata')->default('{}');
            $table->timestamps();

            $table->foreign('pipeline_id')->references('id')->on('pipelines')->onDelete('cascade');
            $table->index(['pipeline_id', 'order']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pipeline_stages');
    }
};
