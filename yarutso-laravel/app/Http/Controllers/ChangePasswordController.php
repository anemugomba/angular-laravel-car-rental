<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChangePasswordRequest;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

class ChangePasswordController extends Controller
{
    public function process(ChangePasswordRequest $request){
         $req = $this->getRequestPasswordRow($request)->get();

         //return $req;

         if(!$req->isEmpty()){
            return $this->changePassword($request);
         }else{
            return $this->tokenNotFoundResponse();
         }

    }

    private function getRequestPasswordRow($request){
        return DB::table('password_resets')->where(['email'=> $request->email, 'token' => $request->resetToken]);
    }

    private function tokenNotFoundResponse(){
        return response()->json(['error' => 'Token email mismatch'],Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    private function changePassword($request){
        $user = User::whereEmail($request->email)->first();
        $user->update(['password' => $request->password]);
        $this->getRequestPasswordRow($request)->delete();
        return response()->json(['data'=>'password successfully changed'],Response::HTTP_CREATED);
    }
}
