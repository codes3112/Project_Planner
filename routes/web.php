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

Route::get('project','Api\ProjectController@index');
Route::post('project/store','Api\ProjectController@store');
Route::delete('project/delete/{id}','Api\ProjectController@destroy');
Route::get('project/edit/{id}','Api\ProjectController@edit');
Route::put('project/update/{id}','Api\ProjectController@update');
