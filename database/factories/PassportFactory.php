<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Passport;
use Faker\Generator as Faker;

$factory->define(Passport::class, function (Faker $faker) {
    return [
        'passport_number' => $faker->swiftBicNumber,
        'exp_date' => $faker->date,
        'country_code' => $faker->countryCode,
    ];
});
