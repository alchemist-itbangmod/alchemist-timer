<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\RoomRepository;
use App\Repositories\RoomRepositoryInterface;

class RoomController extends Controller
{
    protected $roomRepository;

    public function __construct(RoomRepositoryInterface $roomRepo){
        $this->roomRepository = $roomRepo;
    }

    public function getTest($id){
        return response()->json(['time'=>'testTime']);
    }

    public function room(){
        $rooms = $this->roomRepository->getRooms();
        return response()->json($rooms);
    }

    public function roomById($id){
        $roomById = $this->roomRepository->getRoomById($id);
        return response()->json($roomById);
    }
}
