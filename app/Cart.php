<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $fillable = ['user_id', 'total'];

    public function products(){
        return $this->belongsToMany(Product::Class, 'cart_product', 'cart_id')->withPivot('quantity');
    }

    public function user(){
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function add($product_id){
        $this->products()->attach($product_id, ['quantity' => 1]);
    }

    public function remove($product_id){
        $this->products()->detach($product_id);
    }

    public function changeQuantity($product_id, $quantity){
        $this->products()->updateExistingPivot($product_id, ['quantity' => $quantity]);
    }

    public function emptyCart($user_id){
        $this->delete();
        Cart::create(['user_id' => $user_id]);
    }

    public function changeTotal($new_total){
        $this->total = $this->total + $new_total;
        $this->save();
    }

    public function calculateTotal($seller_id){
        $total = 0;
        $products = $this->products->where('seller_id', $seller_id);
        foreach ($products as $product){
            $total = $total + $product->pivot->quantity * $product->price;
        }
        return $total;
    }
}
