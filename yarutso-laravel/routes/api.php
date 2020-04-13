<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([

    'middleware' => 'api',
    /*'namespace' => 'App\Http\Controllers',*/
    /*'prefix' => 'auth'*/

], function () {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('signup', 'AuthController@signup');
    Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
    Route::post('resetPassword', 'ChangePasswordController@process');
    Route::get('cars','CarsController@get');
    Route::post('addCar','CarsController@add');
    Route::post('updateCar','CarsController@update');
    Route::post('checkout','CheckoutController@checkout');
    Route::post('contactus','ContactUsController@sendEmail');
    Route::post('deleteCar','CarsController@delete');
});
