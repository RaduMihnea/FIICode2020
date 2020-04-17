<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin= [
            "email" => "admin@piazeta.com",
            "name" => "Administrator",
            "password" => Hash::make("administrator"),
            "age" => "0",
            "image" => "admin",
            "county_id" => "2",
            "address" => "Aici",
            "phone" => "112",
            "is_admin" => true
        ];
        User::create($admin);
    }
}
