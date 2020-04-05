<?php

namespace App;

use App\Notifications\VerifyEmail;
use App\Traits\Encryptable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, Encryptable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'address', 'age', 'county_id', 'image', 'phone'
    ];

    protected $encryptable = [
        'name', 'address', 'age', 'phone'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function products()
    {
        return $this->hasMany(Product::class, 'seller_id', 'id');
    }

    public function sells()
    {
        return $this->hasMany(Order::class, 'seller_id', 'id');
    }

    public function buys()
    {
        return $this->hasMany(Order::class, 'buyer_id', 'id');
    }

    public function county()
    {
        return $this->belongsTo(County::class, 'county_id', 'id');
    }

    public function cart(){
        return $this->hasOne(Cart::class, 'user_id', 'id');
    }

}
