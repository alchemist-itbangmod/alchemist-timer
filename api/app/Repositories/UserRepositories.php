<?php
namespace App\Repositories;

use App\Model\User;

class UserRepository implements UserRepositoryInterface {

    public function getUsers() {
        return User::all();
    }
    public function getUserById($id) {
        return User::find($id);
    }
    
    public function getUserByNickname() {
        $nickname = DB::table('users')->select('nickname')->where('room_code',$room_code)->get();
        return $nickname;
    }
}