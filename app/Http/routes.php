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

// Pull Image From Storage And Return It
Route::get('/work-image/{file}', function($file){
    $filepath = '/public/images/' . $file;
    $file     = Storage::get($filepath);
    $type     = Storage::mimeType($filepath);
    $response = Response::make($file, 200);

    $response->header("Content-Type", $type);

    return $response;
});

// CMS Routes
Route::get('/add-work',         'WorkController@index')->name('add-work');
Route::post('/add-work/new',    'WorkController@addNewWork')->name('add-new-work');
Route::post('/add-work/remove', 'WorkController@deleteWork')->name('add-new-work');
