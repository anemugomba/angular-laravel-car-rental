<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactUsMail extends Mailable
{
    use Queueable, SerializesModels;

    public $contactUsData;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($d)
    {
        $this->contactUsData = $d;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('Email.contact-us')->with(['contactUsData'=>$this->contactUsData]);
    }
}
