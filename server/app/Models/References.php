<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class References extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'employee_id',
        'Name',
        'Address',
        'TelNumber',
    ];
}
 