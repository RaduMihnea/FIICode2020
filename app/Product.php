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
        'max_quantity'
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

//    public function items(){
//        return $this->hasMany(Product::class, 'product_id', 'id');
//    }
}
