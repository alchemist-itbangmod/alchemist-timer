<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class User extends Model{
  protected $guarded = [
    'id','provider_id'
  ];
}