<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Passport extends Model
{
    protected $fillable = [
        'passport_number',
        'exp_date',
        'country_code',
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
