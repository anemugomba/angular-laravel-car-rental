<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactUsRequest;
use App\Mail\ContactUsMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Response;

class ContactUsController extends Controller
{
    public function sendEmail(ContactUsRequest $request){
        Mail::to('anesucain@gmail.com')->send(new ContactUsMail($request));
        return response()->json(['message' => 'message sent'],Response::HTTP_ACCEPTED);
    }
}
