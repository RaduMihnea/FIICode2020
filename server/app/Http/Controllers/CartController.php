<?php

namespace App\Http\Controllers;

use App\Cart;
use App\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function add()
    {
        request()->validate([
            'product_id' => ['required'],
        ]);

        $cart = auth()->user()->cart;
        $product = Product::findOrFail(request('product_id'));

        $cart->add(request('product_id'));
        $cart->changeTotal($product->price);

        return response()->json('Product added to cart');
    }

    public function remove()
    {
        request()->validate([
            'product_id' => ['required'],
            'new_total' => ['required']
        ]);

        $cart = auth()->user()->cart;

        $cart->remove(request('product_id'));
        $cart->changeTotal(-request('new_total'));

        return response()->json('Product removed from cart');
    }

    public function change()
    {
        request()->validate([
            'product_id' => ['required'],
            'quantity' => ['required'],
            'new_total' => ['required']
        ]);

        $cart = auth()->user()->cart;

        $cart->changeQuantity(request('product_id'), request('quantity'));
        $cart->changeTotal(request('new_total'));

        return response()->json('Changed product quantity to cart');
    }

    public function products(){
        $products = auth()->user()->cart->products;
        $total = auth()->user()->cart->total;

        return response()->json(['products' => $products, 'total' => $total]);
    }

}
