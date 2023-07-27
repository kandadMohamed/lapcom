<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Mail;
use App\Mail\sendMail; 

class AuthController extends Controller
{
    public function createAccount(Request $request){

        $user = DB::table('client')->where('Login', $request->login)->first();

        if($user == null){
            DB::table('client')->insert([
                'Login'=> $request->login,
                'email'=> $request->email,
                'Password'=> $request->password,
                'Firstname'=> $request->firstName,
                'Lastname'=> $request->lastName
            ]);
            return response()->json([
                'message'=>'your account has been created successfully'
            ]);
        }else{
            return response()->json([
                'status' => 'error',
                'message'=>'Account already existe'
            ]);
        }

    }

    public function loggedIn(Request $request){
        $user = DB::table('client')->where('Login', $request->email)->first();
        
        if($user == null){

            $admin = DB::table('admin')->where('login', $request->email)->first();
            if($admin == null){

                return response()->json([
                    'status' => 'error',
                    'message'=>'Account not exist'
                ]);
            }else{
                $passHash = Hash::make($admin->password);
                $passCorrecte = Hash::check($request->password, $passHash);
                if($passCorrecte){
                    return response()->json([
                        'status' => 'fulfilled',
                        'infoUser' => $admin,
                        'isAdmin'=> true
                    ]);
                }else{
                    return response()->json([
                        'status' => 'error',
                        'message'=>'Username or Password incorrect'
                    ]);
                }
            }

        }else{
            $passHash = Hash::make($user->Password);
            $passCorrecte = Hash::check($request->password, $passHash);
            if($passCorrecte){
                return response()->json([
                    'status' => 'fulfilled',
                    'infoUser' => $user,
                    'isAdmin'=> false
                ]);
            }else{
                return response()->json([
                    'status' => 'error',
                    'message'=>'Username or Password incorrect'
                ]);
            }
        }
    }

    public function lostPassword(Request $request){

        $user = DB::table('client')->where('Login', $request->login)->first();
        if($user == null){
            return response()->json([
                'status' => 'error',
                'message'=>'Account not existe'
            ]);
        }else{
            
            // return $user;
            $data = array(
                'password'=>$user->Password
            );
            Mail::send('Mail.mailView', $data, function($message) use ($user) {
                $message
                    ->to($user->Email, 'Reset Password')
                    ->subject('You Lost Your Password');

                $message->from('kandad.mohamed@gmail.com','Lap Com');
            });


            return response()->json([
                'status' => 'succ',
                'message'=>'You will receive a new password via email end with: ****'.substr($user->Email,strpos($user->Email,'@')-4)
            ]);
        }
    }
}
