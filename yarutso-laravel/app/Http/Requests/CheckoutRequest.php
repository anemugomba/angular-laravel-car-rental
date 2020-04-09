<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CheckoutRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
           'email' => 'required|string|max:250',
            'phone' => "required|string|max:250",
            'fromDate' => "required|string|max:250",
            'toDate' => "required|string|max:250",
            'fullName' => "required|string|max:250",
            'vehicle_id' => "required|numeric",
            'car_name' => "required|string|max:250",
        ];
    }
}
