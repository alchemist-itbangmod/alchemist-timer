<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\User;

class UserController extends Controller
{
    protected $userRepository;

    public function __construct(UserRepositoryInterface $userRepo){
        $this->userRepository = $userRepo;
    }

    public function getUsers(){
        $users = $this->userRepository->userRooms();
        return response()->json($users);
    }

    public function getUserById($id){
        $userById = $this->userRepository->getUserById($id);
        return response()->json($userById);
    }
}