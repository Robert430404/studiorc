<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Authentication Routes
Route::auth();

// Homepage Route
Route::get('/', 'HomeController@index')->name('home');

// CMS Routes
Route::get('/add-work',         'WorkController@index')->name('add-work');
Route::post('/add-work/new',    'WorkController@addNewWork')->name('add-new-work');
Route::post('/add-work/remove', 'WorkController@deleteWork')->name('add-new-work');
