<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seminars extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
        'seminar_date',
        'description',
    ];
}
