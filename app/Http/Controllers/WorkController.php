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

            $image->move($storagePath . '/app/public/images/', $fileName);
        }

        Work::create([
            'title' => $title,
            'link'  => $link,
            'image' => $fileName
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
        $selectedWork = Work::where('id', '=', $id)->get()->toArray();
        $image        = '/public/images/' . $selectedWork[0]['image'];

        Storage::delete($image);

        Work::where('id', '=', $id)->delete();

        return redirect('/add-work');
    }
}
