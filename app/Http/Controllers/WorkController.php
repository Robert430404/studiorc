<?php

namespace App\Http\Controllers;

use Storage;
use App\Work;
use App\Http\Requests;
use Illuminate\Http\Request;

class WorkController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the homepage.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $works = Work::all();

        return view('addWork', [
            'works' => $works,
        ]);
    }

    /**
     * Insert the new work into the database and upload the file.
     *
     * @return \Illuminate\Http\Response
     */
    public function addNewWork(Request $request)
    {
        $title = $request->input('title');
        $link  = $request->input('link');
        $image = $request->file('image');

        if($image->isValid())
        {
            $fileName    = $image->getClientOriginalName();
            $storagePath = storage_path();
            $imgPath     = $storagePath . '/app/public/images/';

            $image->move($storagePath . '/app/public/images/', $fileName);
        }

        Work::create([
            'title' => $title,
            'link'  => $link,
            'image' => $imgPath
        ]);

        return redirect('/add-work');
    }

    /**
     * Remove the selected work from the database and delete the file.
     *
     * @return \Illuminate\Http\Response
     */
    public function deleteWork(Request $request)
    {
        $id           = $request->input('id');
        $storagePath  = storage_path() . '/app';
        $selectedWork = Work::where('id', '=', $id)->get()->toArray();
        $image        = str_replace($storagePath, '', $selectedWork[0]['image']);

        Storage::delete($image);

        Work::where('id', '=', $id)->delete();

        return redirect('/add-work');
    }
}
