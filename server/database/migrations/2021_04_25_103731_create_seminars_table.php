<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSeminarsTable extends Migration
{
    public function up()
    {
        Schema::create('seminars', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
            $table->string('seminar_date');
            $table->string('description');
        });
    }

    public function down()
    {
        Schema::dropIfExists('seminars');
    }
}
