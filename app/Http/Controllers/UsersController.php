<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function products(){
        $products = auth()->user()->products;

        return response()->json($products);
    }

    public function buys(){
        $products = collect([]);
        $orders = auth()->user()->buys;
        foreach ($orders as $order){
            $products->push($order->products);
        }
        return response()->json($products->flatten());
    }
}
