<?php

namespace App\Repositories;

interface UserRepositoryInterface {
    public function getUsers();
    // public function getUsersById($id);
    public function getUserByNickname($nickname);

}