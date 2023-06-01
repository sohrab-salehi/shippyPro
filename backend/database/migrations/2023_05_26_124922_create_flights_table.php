<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('flights', function (Blueprint $table) {
            $table->id();
            $table->string('code_departure');
            $table->string('code_arrival');
            $table->decimal('price', 8, 2);
            $table->timestamps();

            $table->foreign('code_departure')->references('code')->on('airports')->onDelete('cascade');
            $table->foreign('code_arrival')->references('code')->on('airports')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('flights');
    }
};
