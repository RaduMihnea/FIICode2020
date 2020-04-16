<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class County extends Model
{
    protected $fillable = [
        'name',
        'id'
    ];

    public function products()
    {
        return $this->hasMany(Product::class, 'county_id', 'id');
    }

    public function users()
    {
        return $this->hasMany(User::class, 'county_id', 'id');
    }
}
