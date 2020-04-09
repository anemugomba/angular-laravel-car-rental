<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CheckoutMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('Email.checkout')
                    ->with([
                        'name' => $this->data->fullName,
                        'phone' => $this->data->phone,
                        'email' => $this->data->email,
                        'fromDate' => $this->data->fromDate,
                        'toDate' => $this->data->toDate,
                        'carName' => $this->data->car_name
                    ]);
    }
}
