<?php

namespace App\Http\Controllers;

use App\Car;
use App\Http\Requests\CarsStorRequest;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CarsController extends Controller
{
    public function get()
    {
        return Car::all();
    }

    public function add(CarsStorRequest $request)
    {

        if ($request->hasFile('image'))
      {
            $file      = $request->file('image');
            $filename  = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension();
            $picture   = date('His').'-'.$filename;
            $file->move(public_path('img'), $picture);

            $car = new Car();
            $car->name = $request->name;
            $car->img_name = $picture;
            $car->description = $request->description;
            $car->price = $request->price;
            $car->save();

            return response()->json(["message" => "Image Uploaded Succesfully"],Response::HTTP_ACCEPTED);
      }
      else
      {
            return response()->json(["message" => "Select image first."],Response::HTTP_NOT_ACCEPTABLE);
      }
    }
}
