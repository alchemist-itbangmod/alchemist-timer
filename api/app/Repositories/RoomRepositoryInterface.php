<?php

namespace App\Repositories;

interface RoomRepositoryInterface {
    public function getRooms();    
    public function getRoomById($id);    
    public function getRoomByCode($roomByCode); 
    public function getRoomByName($roomByName);
    public function TestRoom($roomName);
}