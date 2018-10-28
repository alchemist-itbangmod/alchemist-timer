<?php

namespace App\Repositories;

interface RoomRepositoryInterface {
    public function getRooms();    
    public function getRoomById($id);    
}