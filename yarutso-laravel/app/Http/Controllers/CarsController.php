<?php

namespace App\Http\Controllers;

use App\Car;
use App\Http\Requests\CarEditRequest;
use App\Http\Requests\CarsStorRequest;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\File;
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

    public function update(CarEditRequest $request)
    {
        $car = Car::find($request->id);

        if ($request->hasFile('image')){
            $image_path = public_path().'/img/'.$car->img_name;

            if(file_exists ($image_path)) {
               unlink($image_path);
                }

                $file      = $request->file('image');
                $filename  = $file->getClientOriginalName();
                $extension = $file->getClientOriginalExtension();
                $picture   = date('His').'-'.$filename;
                $file->move(public_path('img'), $picture);

            $car->name = $request->name;
            $car->img_name = $picture;
            $car->description = $request->description;
            $car->price = $request->price;
            $car->save();

        }else{

            $car = Car::find($request->id);
            $car->name = $request->name;
            $car->description = $request->description;
            $car->price = $request->price;
            $car->save();
            return response()->json(["message" => "Updated Successfully"],Response::HTTP_OK);
        }
    }
}
