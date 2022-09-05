<?php

use App\Http\Controllers\Admin\Auth\LoginController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

// Admin Auth
// ----------------------------------------------

Route::post('login', [LoginController::class, 'login']);

Route::post('auth/logout', function () {
    Auth::guard('web')->logout();
});


// Move other http requests to the Vue App
// -------------------------------------------------

Route::get('/admin/{vue?}', function () {
    return view('app');
})->where('vue', '[\/\w\.-]*')->name('admin.dashboard')->middleware(['redirect-if-unauthenticated']);

Route::get('/', function () {
    return view('app');
})->where('vue', '[\/\w\.-]*')->name('home')->middleware(['guest']);

Route::get('/reset-password/{token}', function () {
    return view('app');
})->where('vue', '[\/\w\.-]*')->name('reset-password')->middleware(['guest']);

Route::get('/forgot-password', function () {
    return view('app');
})->where('vue', '[\/\w\.-]*')->name('forgot-password')->middleware(['guest']);

Route::get('/login', function () {
    return view('app');
})->where('vue', '[\/\w\.-]*')->name('login')->middleware(['guest']);
