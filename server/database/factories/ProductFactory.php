<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(),
        'description' => $faker->realText(),
        'price' => $faker->randomNumber(),
        'negotiable' => $faker->boolean(),
        'seller_id' => factory(\App\User::class),
    ];
});
