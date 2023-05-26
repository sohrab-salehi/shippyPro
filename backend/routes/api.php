<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AirportController;
use App\Http\Controllers\FlightController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Routes for airports
Route::get('/airports', [AirportController::class, 'index']);
Route::get('/airports/{id}', [AirportController::class, 'show']);
Route::post('/airports', [AirportController::class, 'store']);
Route::put('/airports/{id}', [AirportController::class, 'update']);
Route::delete('/airports/{id}', [AirportController::class, 'destroy']);

// Routes for flights
Route::get('/flights', [FlightController::class, 'index']);
Route::get('/flights/{id}', [FlightController::class, 'show']);
Route::post('/flights', [FlightController::class, 'store']);
Route::put('/flights/{id}', [FlightController::class, 'update']);
Route::delete('/flights/{id}', [FlightController::class, 'destroy']);

// Additional routes for API functionality
Route::get('/flights/lowest-price', [FlightController::class, 'getLowestPrice']);
Route::get('/flights/most-convenient', [FlightController::class, 'getMostConvenientFlights']);
