<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    protected $table = 'flights';

    protected $fillable = ['code_departure', 'code_arrival', 'price'];

    /**
     * Get the departure airport for the flight.
     */
    public function departureAirport()
    {
        return $this->belongsTo(Airport::class, 'code_departure', 'code');
    }

    /**
     * Get the arrival airport for the flight.
     */
    public function arrivalAirport()
    {
        return $this->belongsTo(Airport::class, 'code_arrival', 'code');
    }
}
