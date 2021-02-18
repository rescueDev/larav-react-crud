<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */

//Users
Route::get('users', 'UserController@index');
Route::post('user', 'UserController@store');
Route::get('users/show/{id}', 'UserController@show');
Route::get('users/create', 'UserController@create');
Route::get('users/edit/{id}, UserController@edit');
Route::put('user/{id}', 'UserController@update');
Route::delete('users/delete/{id}', 'UserController@destroy');

//Posts
Route::get('posts', 'PostController@index');
Route::post('posts', 'PostController@store');
Route::get('posts/{id}', 'PostController@show');

//Passports
Route::get('passports', 'PassportController@index');
Route::post('passports', 'PassportController@store');
Route::get('passports/{id}', 'PassportController@show');
