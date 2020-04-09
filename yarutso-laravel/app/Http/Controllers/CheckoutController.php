<?php

namespace App\Http\Controllers;

use App\Http\Requests\CheckoutRequest;
use App\Mail\CheckoutMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Response;

class CheckoutController extends Controller
{
    public function checkout(CheckoutRequest $request){
        Mail::to('anesucain@gmail.com')->send(new CheckoutMail($request));
        return response()->json(['message' => "message sent"],Response::HTTP_ACCEPTED);
    }
}
