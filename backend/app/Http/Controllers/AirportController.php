<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Airport;

class AirportController extends Controller
{
    /**
     * Retrieve a list of all airports.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        error_log("test");
        $airports = Airport::all();

        return response()->json($airports);
    }

    /**
     * Retrieve details of a specific airport.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $airport = Airport::findOrFail($id);

        return response()->json($airport);
    }

    /**
     * Create a new airport.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'code' => 'required|string',
            'lat'  => 'required|numeric',
            'lng'  => 'required|numeric',
        ]);

        $airport = Airport::create($validatedData);

        return response()->json($airport, 201);
    }

    /**
     * Update an existing airport.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'code' => 'required|string',
            'lat'  => 'required|numeric',
            'lng'  => 'required|numeric',
        ]);

        $airport = Airport::findOrFail($id);
        $airport->update($validatedData);

        return response()->json($airport);
    }

    /**
     * Delete an existing airport.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $airport = Airport::findOrFail($id);
        $airport->delete();

        return response()->json(['message' => 'Airport deleted']);
    }
}
