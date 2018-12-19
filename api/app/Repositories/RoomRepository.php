<?php
namespace App\Repositories;

use DB;
use Illuminate\Http\Request;
use App\Models\Room;

class RoomRepository implements RoomRepositoryInterface
{
    public function getRooms(){
		return Room::all();
	}

	public function getRoomById($id){
		return Room::find($id);
	}

	public function getRoomByCode($roomCode){
		$room = Room::where('room_code',$roomCode)->get()->first();
		return $room;
	}
	
    public function getRoomByName($roomName){
		$room = Room::where('room_name',$roomName)->get()->first();
		return $room;
	}

	public function createRoom($room){
		return Room::create($room);
	}

}
