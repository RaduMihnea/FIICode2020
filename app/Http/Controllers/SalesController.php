<?php

namespace App\Http\Controllers;

use App\Sale;
use Illuminate\Http\Request;

class SalesController extends Controller
{
    public function index()
    {
        $sales = Sale::findOrFail()->get();

        return view('sales.index', compact('sales'));
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'buyer_id' => 'required',
            'seller_id' => 'required',
            'price' => 'required',
        ]);

        Sale::create($attributes);

        return redirect('products');
    }

}
