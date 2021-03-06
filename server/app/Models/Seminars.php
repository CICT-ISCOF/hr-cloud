<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seminars extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'From',
        'To',
        'Title',
        'Venue',
        'Type',
        'Agency',
    ];
    
    public function attachments(){
        return $this->hasMany(Attachments::class, 'seminar_id','id');
    }
}
