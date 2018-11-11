<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('rooms','RoomController@getRooms');
Route::get('room/{id}','RoomController@getRoomById');
// Route::get('room/{room_name}','RoomController@createRoomCode');
// Route::post('room/', function () {
//     return response('กรุณากรอกข้อมูล ... ',500)
//     ->header('Content-Type', 'text/plain');
// });
// Route::get('room/{room_name}','RoomController@createRoomCode');
// Route::get('room/{room_code}','RoomController@getRoomByCode');
// Route::post('room/{room_name}','RoomController@checkCode');
Route::post('room','RoomController@createRoom');
Route::post('room','RoomController@createRoom');
Route::get('users', 'UserController@getUsers');
Route::get('users/{id}', 'UserController@getUserById');
