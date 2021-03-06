<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAttachmentsTable extends Migration
{
  
    public function up()
    {
        Schema::create('attachments', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('user_id')->references('id')->on('users')->onDelete('cascade')->nullable();
            $table->string('Type');
            $table->string('URL');
            $table->string('Name');
            $table->string('document_id')->nullable();
            $table->string('award_id')->nullable();
            $table->string('seminar_id')->nullable();
            $table->string('scholarship_id')->nullable();
        });
    }

    
    public function down()
    {
        Schema::dropIfExists('attachments');
    }
}
