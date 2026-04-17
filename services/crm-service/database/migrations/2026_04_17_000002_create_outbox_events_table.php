<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('outbox_events', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('type', 200)->index();
            $table->unsignedInteger('version')->default(1);
            $table->string('aggregate_type', 100)->index();
            $table->uuid('aggregate_id')->index();
            $table->uuid('org_id')->index();
            $table->string('actor_user_id', 80)->index();
            $table->jsonb('payload')->default('{}');
            $table->timestampTz('occurred_at')->index();
            $table->timestampTz('published_at')->nullable()->index();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('outbox_events');
    }
};

