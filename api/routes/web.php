<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/hello', function () {
    return "Hello laravel";
});

Route::get('form', 'Auth\LoginController@form');

// required
Route::get('blog/{id}', function($id) {
    return "Welcome to Blog ID : " . $id;
});

// optional
Route::get('profile/{id?}', function($id=null) {
    return "Welcome to profile ID : " . $id;
});

//
Route::get('book/{name?}', function($name) {
    return "Welcome to Book Name : " . $name;
})->where('name','[A-Za-z]+');

Route::match(['get','post'], 'bill', function(){
    if(Request::isMethod('get')){
        return 'this is get method';
    }
    if(Request::isMethod('post')){
        return 'this is post method';
    }
});

Route::any('poll', 'Auth\LoginController@poll');
