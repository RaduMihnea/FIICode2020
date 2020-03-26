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

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/', function(){
    return redirect('/products');
});

Route::get('/products', 'ProductsController@index');
Route::get('/products/{product}', 'ProductsController@show');


Route::get('/sales', 'SalesController@index');
Route::post('/sales', 'SalesController@store');
//Route::get('/sales/confirm', 'SalesController@');

//Auth::routes();

Route::post('register', 'Auth\RegisterController@register');
Route::post('/login', 'Auth\LoginController@login');

Route::group(['middleware' => ['auth:api']], function(){
    Route::post('/logout', 'Auth\LoginController@logout');
    Route::post('/products', 'ProductsController@store');
    Route::put('/products/{product}', 'ProductsController@update');
    Route::delete('/products/{product}', 'ProductsController@destroy');
});

Route::get('/home', 'HomeController@index')->name('home');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
