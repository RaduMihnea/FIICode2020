<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function products()
    {
        $products = auth()->user()->products;

        return response()->json($products);
    }

    public function buys()
    {
        $products = collect([]);
        $orders = auth()->user()->buys;
        foreach ($orders as $order) {
            $products->push($order->products);
        }
        return response()->json($products->flatten());
    }

    public function update()
    {
        request()->validate([
            'name' => ['required', 'string', 'max:255'],
            'address' => ['required'],
            'image' => ['required'],
            'phone' => ['required'],
        ]);

        $attributes = request(['name', 'address', 'image', 'phone']);

        $user = auth()->user();

        foreach (auth()->user()->tokens as $token) {
            $token->revoke();
        }

        $user->update($attributes);

        $user->token = $user->createToken('Login Token')->accessToken;
        return response()->json($user);
    }
}
