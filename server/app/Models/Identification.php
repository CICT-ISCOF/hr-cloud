<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Identification extends Model
{
    use HasFactory;
     protected $fillable = [
        'pds_id',
        'GovtID',
        'Passport',
        'Date',
    ];
}