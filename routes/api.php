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
Route::post('user/restore', 'UserController@restore');


//Posts
Route::get('posts', 'PostController@index');
Route::post('post', 'PostController@store');
Route::get('posts/show/{id}', 'PostController@show');
Route::get('posts/create', 'PostController@create');
Route::get('posts/edit/{id}, PostController@edit');
Route::put('post/{id}', 'PostController@update');
Route::delete('posts/delete/{id}', 'PostController@destroy');
Route::post('posts/restore', 'PostController@restore');
Route::patch('posts/likes/{id}', 'PostController@putLikes');

//Passports
Route::get('passports', 'PassportController@index');
Route::post('passports', 'PassportController@store');
Route::get('passports/{id}', 'PassportController@show');
