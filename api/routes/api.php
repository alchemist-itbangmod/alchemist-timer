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

Route::get('rooms','RoomController@room');
Route::get('room/{id}','RoomController@roomById');
Route::get('users', 'UserController@getUsers');
Route::get('users/{id}', 'UserController@getUserId');
