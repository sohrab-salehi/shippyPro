<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Flight;
use App\Models\Airport;

class FlightController extends Controller
{
    /**
     * Retrieve a list of all flights.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $flights = Flight::all();

        return response()->json($flights);
    }

    /**
     * Retrieve details of a specific flight.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $flight = Flight::findOrFail($id);

        return response()->json($flight);
    }

    /**
     * Create a new flight.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'code_departure' => 'required|string',
            'code_arrival' => 'required|string',
            'price' => 'required|numeric',
        ]);

        $flight = Flight::create($validatedData);

        return response()->json($flight, 201);
    }

    /**
     * Update an existing flight.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'code_departure' => 'required|string',
            'code_arrival' => 'required|string',
            'price' => 'required|numeric',
        ]);

        $flight = Flight::findOrFail($id);
        $flight->update($validatedData);

        return response()->json($flight);
    }

    /**
     * Delete an existing flight.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $flight = Flight::findOrFail($id);
        $flight->delete();

        return response()->json(['message' => 'Flight deleted']);
    }

    /**
     * Calculate the lowest price for flights.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getLowestPrice()
    {
        $lowestPrice = Flight::min('price');

        return response()->json(['lowest_price' => $lowestPrice]);
    }

    /**
     * Retrieve the most convenient flights.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getMostConvenientFlights()
    {
        $mostConvenientFlights = Flight::orderBy('price')
            ->orderBy('code_departure')
            ->orderBy('code_arrival')
            ->get();

        return response()->json($mostConvenientFlights);
    }
}
