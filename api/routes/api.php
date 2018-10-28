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

Route::prefix('/timers')->group(function(){
    Route::get('/',function(){
    return response()->json(['massage' => 'HelloWorld']);
    });
});

Route::get('timer/{id}','RoomController@getTest');

Route::get('rooms','RoomController@room');
Route::get('room/{id}','RoomController@roomById');