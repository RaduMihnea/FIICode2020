<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    protected $fillable = [
        'seller_id',
        'buyer_id',
        'price'
    ];

    public function seller(){
        return $this->belongsTo(User::class, 'seller_id', 'id');
    }

    public function buyer(){
        return $this->belongsTo(User::class, 'buyer_id', 'id');
    }

    public function confirm(){
        $this->confirmed = true;
    }
}
