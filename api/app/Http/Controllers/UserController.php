<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;    
use App\Models\User;

use App\Repositories\UserRepositoryInterface;


class UserController extends Controller
{
    protected $userRepository;

    public function __construct(UserRepositoryInterface $userRepo){
        $this->userRepository = $userRepo;
    }

    public function getUsers(){
        $users = $this->userRepository->getUsers();
        return response()->json($users);
    }

    public function getUsersById($id){
        $userById = $this->userRepository->getUsersById($id);
        return response()->json($userById);
    }

    public function getUserByNickname($nickname){
        $userByNickname = $this->userRepository->getUserByNickname($nickname);
        return response()->json($userByNickname);
    }

    public function createUser(Request $request){
        $test = $request->all();
        return $this->userRepository->createUser($test);
    }

}