<?php

namespace App\Http\Controllers;

use Mail;
use App\Work;
use App\Http\Requests;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the homepage.
     *
     * @return \Illuminate\Http\Response
     */
    public function thankYou()
    {
        return view('thanks');
    }
}
