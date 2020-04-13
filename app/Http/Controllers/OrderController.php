<?php

namespace App\Http\Controllers;

use App\Mail\NeworderMail;
use App\Notifications\NewOrderNotification;
use App\Notifications\orderConfirmationNotification;
use App\Notifications\orderDeniedNotification;
use App\Product;
use App\Order;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use function MongoDB\BSON\toJSON;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::all()->get();

        return response()->json($orders);
    }

    public function store()
    {
        $all_products = auth()->user()->cart->products->groupBy('seller_id');

        foreach ($all_products as $seller_products) {
            $total = auth()->user()->cart->calculateTotal($seller_products->first()->seller_id);
            $order = Order::create(['buyer_id' => auth()->user()->id, 'seller_id' => $seller_products->first()->seller_id, 'total' => $total]);
            foreach ($seller_products as $product) {
                $order->products()->attach($product->id, ['quantity' => $product->pivot->quantity]);
                $product->changeQuantity(-$product->pivot->quantity);;
                if ($product->max_quantity === 0) $product->soldOut(true);
            }
            $mail_data = ['buyer_name' => $order->buyer->name, 'products' => $seller_products, 'id' => $order->id, 'seller_name' => $order->seller->name];
            $order->validate(true);
            $order->seller->notify(new NewOrderNotification($mail_data));
        }
        auth()->user()->cart->emptyCart(auth()->user()->id);
        return response()->json("Order Initiated");
    }

    public function confirm(Order $order, Request $request)
    {
        $request->validate(['confirmed' => 'required']);

        if ($order['confirmed'] === NULL && $order->seller->id === auth()->user()->id) {
            $order->confirm($request->input('confirmed'));
            if ($order->confirmed == true) {
                $order->buyer->notify(new orderConfirmationNotification($order->seller, $order->id, $order->products));
                $order->seller->notify(new orderConfirmationNotification($order->buyer, $order->id, $order->products));
                return response()->json("Order confirmed");
            } else {
                $order->buyer->notify(new orderDeniedNotification($order->seller->name, $order->id, $order->products));
                foreach ($order->products as $product) {
                    $product->changeQuantity($product->pivot->quantity);
                    $product->soldOut(false);
                }
                return response()->json("Order denied");
            }
        } else return response()->json("Unauthorized", 401);
    }

    public function devalidate(Order $order)
    {
        if ($order->seller()->id === auth()->user()->id || auth()->user()->isAdmin())
            $order->devalidate(false);
        foreach ($order->products as $product) {
            $product->changeQuantity($product->pivot->quantity);
            $product->soldOut(false);
        }
    }

    public function show(Order $order)
    {
        $order->products;
        return response()->json(['order' => $order, 'buyer' => ['name' => $order->buyer->name, 'county' => $order->buyer->county->name]]);
    }

    public function group_by($key, $data)
    {
        $result = array();

        foreach ($data as $val) {
            if (array_key_exists($key, $val)) {
                $result[$val[$key]][] = $val;

            } else {
                $result[""][] = $val;
            }
        }

        return $result;
    }
}
