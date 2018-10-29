<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\User;

class UserController extends Controller
{
    public function getUsers() {
        return User::all();
    }

    public function getUserId($id) {
        return User::where('id' , $id)->first();
    }
}
