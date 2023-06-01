<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Airport extends Model
{
    protected $table = 'airports';

    protected $fillable = ['name', 'code', 'lat', 'lng'];

    public static $rules = [
        'code' => 'required|unique:airports,code',
    ];

    /**
     * Get the flights departing from the airport.
     */
    public function departingFlights()
    {
        return $this->hasMany(Flight::class, 'code_departure', 'code');
    }

    /**
     * Get the flights arriving at the airport.
     */
    public function arrivingFlights()
    {
        return $this->hasMany(Flight::class, 'code_arrival', 'code');
    }
}
