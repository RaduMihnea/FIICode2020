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

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/', function(){
   return redirect('/products');
});

Route::resource('products', 'ProductsController');

Route::get('/sales', 'OrderController@index');
Route::post('/sales', 'OrderController@store');
//Route::get('/sales/confirm', 'OrderController@');

//Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

