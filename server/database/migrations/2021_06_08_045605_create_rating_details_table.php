<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRatingDetailsTable extends Migration
{
    public function up()
    {
        Schema::create('rating_details', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('rating_id')->onDelete('cascade');
            $table->string('Output')->nullbale();
            $table->string('SuccessIndicatiors')->nullbale();
            $table->double('Q');
            $table->double('E');
            $table->double('T');
            $table->double('A');
            $table->string('Type')->nullbale();
            $table->string('ActualAccomplishments')->nullbale();
            $table->string('Remarks')->nullbale();
        });
    }

    public function down()
    {
        Schema::dropIfExists('rating_details');
    }
}
