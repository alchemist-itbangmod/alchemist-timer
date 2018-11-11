<?php
namespace App\Repositories;

use App\Models\User;

class UserRepository implements UserRepositoryInterface {

    public function getUsers() {
        return User::all();
    }
    public function getUsersById($id) {
        return User::find($id);
    }
    public function getUserByNickname($nickname) {
        return User::where('nickname',  $nickname)->get()->first();
    }

    public function createUser($user){
        return User::create($user);
    }

}