<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'title',
        'description',
        'price',
        'owner_id'
    ];

    public function owner(){
        return $this->belongsTo(User::class, 'owner_id', 'id');
    }

    public function tags(){
        return $this->belongsToMany(Tag::class, 'product_tag', 'product_id');
    }
}
