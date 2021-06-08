<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Childrens extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'pds_id',
        'Name',
        'DOB',
    ];
}
 