<?php

namespace App\Http\Controllers;

use App\Mail\NewSaleMail;
use App\Notifications\NewSaleNotification;
use App\Sale;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use function MongoDB\BSON\toJSON;

class SalesController extends Controller
{
    public function index()
    {


        $sales = Sale::all()->get();

        return redirect('products');
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'buyer_id' => 'required',
            'seller_id' => 'required',
            'price' => 'required',
        ]);

        Sale::create($attributes);

        $seller = User::findOrFail($request->input('seller_id'));

        $seller->notify(new NewSaleNotification(auth()->user()->name));

        return redirect('products');
    }

    public function confirm(){



    }

}
