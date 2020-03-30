<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function products(){
        $products = auth()->user()->products;

        return response()->json($products);
    }
}
