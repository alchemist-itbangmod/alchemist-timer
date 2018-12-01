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
        // $test = 'RM2301';
        return $rand;

    }

    // public function checkCode($room_name){
    //     $getRoomName = $this->roomRepository->getRoomByName($room_name);
    //     $genRoomCode = $this->createRoomCode();
    //     $oldRoomCode = $this->getRoomByCode($getRoomName[0]->room_code);
    //     $DATE_TIME = '2018-10-30 21';
    //     $DATE_FORMAT = 'Y-m-d H';
    //     if($genRoomCode != $oldRoomCode){
    //         $newRoom = DB::table('rooms')->insert(
    //             ['room_name' => $room_name,
    //             'room_code' => $genRoomCode,
    //             'time_current' => Carbon::createFromFormat($DATE_FORMAT, $DATE_TIME)->toDateTimeString(),
    //             'user_id' => $getRoomName[0]->user_id]
    //         );
    //         $response = $this->roomRepository->getRoomByCode($genRoomCode);
    //         return $response;
    //     }else{
    //         return $this->createRoomCode();
    //     }
    //     $test = $old."+".$gen;
    //     return $test;
    // }

    // public function getRoomByCode($roomByCode){
    //     $roomCode = $this->roomRepository->getRoomByCode($roomByCode);
    //     return $roomCode;
    // }

    // public function getRoomByName($roomByName){
    //     $roomName = $this->roomRepository->getRoomByName($roomByName);
    //     return $roomName;
    // }
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

    public function getCodeRoom(){
        
    }
}
