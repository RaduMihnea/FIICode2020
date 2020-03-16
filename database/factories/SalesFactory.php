<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Sale;
use App\User;
use Faker\Generator as Faker;

$factory->define(Sale::class, function (Faker $faker) {
    return [
        'seller_id'=>factory(User::class),
        'buyer_id'=>factory(User::class),
        'price'=>$faker->randomNumber()
    ];
});
