<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;

class ResetPasswordController extends Controller
{

    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    public function reset(Request $request)
    {
        $this->validateRequest();
        $response = $this->broker()->reset(
            $this->credentials($request), function ($user, $password) {
            $this->resetPassword($user, $password);
        });

        if($response == Password::PASSWORD_RESET){
            return response()->json("Password reset successfully");
        } else {
            return response()->json("Password reset failed");
        }
    }

    public function resetPassword($user, $password)
    {
        $this->setUserPassword($user, $password);

        $user->save();
    }

    public function credentials(Request $request)
    {
        return $request->only(
            'email', 'password', 'token'
        );
    }

    public function validateRequest()
    {
        return request()->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);
    }

}
