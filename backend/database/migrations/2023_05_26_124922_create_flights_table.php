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
            $table->unsignedBigInteger('departure_id');
            $table->unsignedBigInteger('arrival_id');
            $table->decimal('price', 8, 2);
            $table->timestamps();

            $table->foreign('departure_id')->references('id')->on('airports')->onDelete('cascade');
            $table->foreign('arrival_id')->references('id')->on('airports')->onDelete('cascade');
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
