<?php
namespace App\Repositories;

use App\Model\User;

class UserRepository implements UserRepositoryInterface {

    public function getUsers() {
        return Room::all();
    }
    public function getUsersById($id) {
        return Room::find($id);
    }
}