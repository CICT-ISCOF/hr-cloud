<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RatingDetails extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'rating_id',
        'Q',
        'E',
        'T',
        'A',
        'Type',
        'Output',
        'SuccessIndicatiors',
        'ActualAccomplishments',
        'Remarks'
    ];
}

 