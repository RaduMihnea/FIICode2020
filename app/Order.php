<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'seller_id',
        'buyer_id',
        'total',
        'confirmed',
        'validated'
    ];

    public function seller()
    {
        return $this->belongsTo(User::class, 'seller_id', 'id');
    }

    public function buyer()
    {
        return $this->belongsTo(User::class, 'buyer_id', 'id');
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, 'order_product', 'order_id')->withPivot('quantity');
    }

    public function confirm($confirmation)
    {
        $this->confirmed = $confirmation;
        $this->save();
    }

    public function validate($status)
    {
        $this->validated = $status;
        $this->save();
    }
}
