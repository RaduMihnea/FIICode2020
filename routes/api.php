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
Route::get('/', function(){
    return redirect('/products');
});

Route::get('/products', 'ProductsController@index');
Route::get('/products/{product}', 'ProductsController@show');
Route::post('register', 'Auth\RegisterController@register');
Route::post('/login', 'Auth\LoginController@login');
Route::post('/password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
Route::post('/password/reset', 'Auth\ResetPasswordController@reset');

Route::group(['middleware' => ['auth:api']], function(){
    Route::post('/logout', 'Auth\LoginController@logout');
    Route::post('/products', 'ProductsController@store');
    Route::put('/products/{product}', 'ProductsController@update');
    Route::delete('/products/{product}', 'ProductsController@destroy');
    Route::post('/orders', 'OrderController@store');
    Route::post('/orders/{order}', 'OrderController@confirm');
    Route::get('/orders/{order}', 'OrderController@show');
    Route::get('/user/products', 'UsersController@products');
    Route::get('/user/buys', 'UsersController@buys');
    Route::put('/user/update', 'UsersController@update');
    Route::post('/cart/add-product', 'CartController@add');
    Route::post('/cart/remove-product', 'CartController@remove');
    Route::post('/cart/change-product', 'CartController@change');
    Route::get('/cart', 'CartController@products');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
