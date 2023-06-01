<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Flight;
use App\Models\Airport;
use Illuminate\Support\Facades\DB;

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
     * Retrieve the most convenient flights.
     *
     * @return \Illuminate\Http\JsonResponse
     */

    public function getMostConvenientFlights($departure, $arrival)
    {
        $query = "SELECT f1.code_departure, '' AS stop_over, f1.code_arrival, f1.price
              FROM flights AS f1
              WHERE f1.code_departure = :departureCode1
              AND f1.code_arrival = :arrivalCode1
              UNION
              SELECT f3.code_departure, f3.code_arrival AS stop_over, f4.code_arrival, (f3.price + f4.price)
              FROM flights AS f3
              JOIN flights AS f4 ON f3.code_arrival = f4.code_departure
              WHERE f3.code_departure = :departureCode2
              AND f4.code_arrival = :arrivalCode2
              ORDER BY price ASC
              LIMIT 1";

        $result = DB::select($query, ['departureCode1' => $departure, 'arrivalCode1' => $arrival, 'departureCode2' => $departure, 'arrivalCode2' => $arrival]);

        return response()->json($result);
    }
}
