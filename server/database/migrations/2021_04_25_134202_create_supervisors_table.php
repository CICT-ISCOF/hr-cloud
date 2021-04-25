<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSupervisorsTable extends Migration
{
    public function up()
    {
        Schema::create('supervisors', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('supervisor_id');
            $table->string('employee_id');
        });
    }

    public function down()
    {
        Schema::dropIfExists('supervisors');
    }
}