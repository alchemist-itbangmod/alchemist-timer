<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $guarded = [
      'id', 'created_at', 'updated_at'
    ];

    protected $filable = ['room_code'];
}