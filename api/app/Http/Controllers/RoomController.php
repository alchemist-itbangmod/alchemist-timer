<?php

namespace App\Http\Controllers;

use App\Http\Controllers\RoomController;

use Illuminate\Http\Request;
use App\Repositories\RoomRepository;
use App\Repositories\RoomRepositoryInterface;
use DB;
use Carbon\Carbon;

class RoomController extends Controller
{
    protected $roomRepository;


    public function __construct(RoomRepositoryInterface $roomRepo){
        $this->roomRepository = $roomRepo;
    }

    public function getRooms(){
        $rooms = $this->roomRepository->getRooms();
        return response()->json($rooms);
    }

    public function getRoomById($id){
        $roomById = $this->roomRepository->getRoomById($id);
        return response()->json($roomById);
    }

    public function createRoomCode(){
        $strRan = str_split('abcdefghijklmnopqrstuvwxyz'
                     .'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                     .'0123456789'); 
        shuffle($strRan);
        $rand = '';
        foreach (array_rand($strRan, 6) as $valueStr) {
            $rand .= $strRan[$valueStr];
        }
        return $rand;
	}
	
    public function createRoom(Request $request) {
        $newRoom = $request->all();
        $generateCode = $this->createRoomCode();
        $room = $this->roomRepository->getRoomByCode($generateCode);
        while (!is_null($room)) {
            $generateCode = $this->createRoomCode();
            $room = $this->roomRepository->getRoomByCode($generateCode);
        }
        $newRoom['room_code'] = $generateCode;
        $newRoom['user_id'] = 1;
        return $this->roomRepository->createRoom($newRoom);
	}


}
