<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Seminars extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seminars', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('From');
            $table->string('To');
            $table->string('Title');
            $table->string('Venue');
            $table->string('Type');
            $table->string('Agency');
        }); 
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('seminars');
    }
}
