<?php
namespace App\Repositories;

use App\Models\Room;

class RoomRepository implements RoomRepositoryInterface
{
    public function getRooms(){
			return Room::all();
		}

		public function getRoomById($id){
			return Room::find($id);
		}
}
