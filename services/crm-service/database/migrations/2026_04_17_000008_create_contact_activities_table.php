<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('contact_activities', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('contact_id')->index();
            $table->uuid('org_id')->index();
            $table->string('created_by_user_id', 80)->index();
            $table->string('activity_type', 100);
            $table->string('title', 255);
            $table->text('description')->nullable();
            $table->timestamp('activity_date_time')->nullable();
            $table->jsonb('metadata')->default('{}');
            $table->timestamps();

            $table->foreign('contact_id')->references('id')->on('contacts')->onDelete('cascade');
            $table->index(['org_id', 'created_at']);
            $table->index(['contact_id', 'activity_type']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('contact_activities');
    }
};
