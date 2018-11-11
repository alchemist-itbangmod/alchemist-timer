<?php

namespace App\Repositories;

interface UserRepositoryInterface {
    public function getUsers();    
    public function getUserById($id);  
    public function getUserByNickname($nickname);
}