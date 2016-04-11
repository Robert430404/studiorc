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

    /**
     * Sends an email on form post.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendEmail(Request $request)
    {
        $formInfo = [
            'name'     => $request->input('name'),
            'email'    => $request->input('email'),
            'phone'    => $request->input('phone'),
            'subject'  => $request->input('subject'),
            'message'  => $request->input('message'),
            'honeypot' => $request->input('honeypot'),
        ];

        $this->validate($request, [
            'name'     => 'required',
            'email'    => 'required|email',
            'phone'    => 'required',
            'subject'  => 'required',
            'message'  => 'required',
            'honeypot' => 'max:0',
        ]);

        Mail::send('emails.contact', ['formInfo' => $formInfo], function ($m) use ($formInfo) {
            $m->from('sendmail@studiorclv.com', 'Send Mail');
            $m->replyTo($formInfo['email'], $formInfo['name']);
            $m->to('robert@studiorclv.com', 'Robert Joseph Cox')->subject($formInfo['subject']);
        });

        return redirect('/thank-you');
    }
}
