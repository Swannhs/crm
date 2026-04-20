<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('contacts', function (Blueprint $table) {
            $table->uuid('phonebook_id')->nullable()->index()->after('org_id');
            $table->string('var1', 255)->nullable()->after('metadata');
            $table->string('var2', 255)->nullable()->after('var1');
            $table->string('var3', 255)->nullable()->after('var2');
            $table->string('var4', 255)->nullable()->after('var3');
            $table->string('var5', 255)->nullable()->after('var4');
            
            // Add foreign key if we want to be strict, but in microservices it's often avoided 
            // if they are in the same DB we can. 
            // In this project they are in the same DB (ms-crm-db)
            $table->foreign('phonebook_id')->references('id')->on('phonebooks')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::table('contacts', function (Blueprint $table) {
            $table->dropForeign(['phonebook_id']);
            $table->dropColumn(['phonebook_id', 'var1', 'var2', 'var3', 'var4', 'var5']);
        });
    }
};
