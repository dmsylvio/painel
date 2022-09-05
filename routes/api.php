<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Mobile\AuthController;
use App\Http\Controllers\Admin\Dashboard\DashboardController;

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

Route::middleware("auth:sanctum")->get("/user", function (Request $request) {
    return $request->user();
});

// Authentication & Password Reset
//----------------------------------
Route::group(["prefix" => "auth"], function () {
    // Route::post("register", [AuthController::class, "register"]);
    Route::post("login", [AuthController::class, "login"]);

    Route::post("logout", [AuthController::class, "logout"])->middleware("auth:sanctum");

    // Send reset password mail
    // Route::post("password/email", [ForgotPasswordController::class, "sendResetLinkEmail"])->middleware("throttle:10,2");

    // handle reset password form process
    // Route::post("reset/password", [ResetPasswordController::class, "reset"]);

    // Auth check
    //----------------------------------
    Route::get("check", [AuthController::class, "check"]);
});


Route::middleware(['auth:sanctum'])->group(function () {
    Route::middleware(['bouncer'])->group(function () {

        // Dashboard
        //----------------------------------
        Route::get('/dashboard', DashboardController::class);
    });
});
