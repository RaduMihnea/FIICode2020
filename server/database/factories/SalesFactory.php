<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Order;
use App\User;
use Faker\Generator as Faker;

$factory->define(Order::class, function (Faker $faker) {
    return [
        'seller_id'=>factory(User::class),
        'buyer_id'=>factory(User::class),
        'price'=>$faker->randomNumber()
    ];
});
