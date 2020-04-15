<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'title',
        'description',
        'price',
        'seller_id',
        'negotiable',
        'county_id',
        'image',
        'max_quantity',
        'sold_out'
    ];

    public function owner(){
        return $this->belongsTo(User::class, 'seller_id', 'id');
    }

    public function tags(){
        return $this->belongsToMany(Tag::class, 'product_tag', 'product_id')->withTimestamps();
    }

    public function county(){
        return $this->belongsTo(County::class, 'county_id', 'id');
    }

    public function changeQuantity($quantity){
        $this->max_quantity = $this->max_quantity + $quantity;
        $this->save();
    }

    public function soldOut($status){
        $this->sold_out = $status;
        $this->save();
    }
}
