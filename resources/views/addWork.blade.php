@extends('layouts.backend')

@section('content')
<div class="add-work">
    <div class="row">
        <div class="columns large-6 medium-6 small-12">
            <div class="add-new-work">
                <div class="panel">
                    <div class="panel-heading aligncenter">
                        Add New Work
                    </div>
                    <div class="panel-body">
                        <form class="form" method="post" action="{{ url('/add-work/new') }}" enctype="multipart/form-data">
                            {{ csrf_field() }}
                            <div class="row">
                                <div class="columns large-12 medium-12 small-12">
                                    <label>
                                        Work Title
                                        <input type="text" name="title" class="form-control title" />
                                    </label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="columns large-12 medium-12 small-12">
                                    <label>
                                        Link To Work
                                        <input type="text" name="link" class="form-control link" />
                                    </label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="columns large-12 medium-12 small-12">
                                    <label>
                                        Work Image
                                        <input type="file" name="image" class="form-control image" />
                                    </label>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="columns large-12 medium-12 small-12">
                                    <input type="submit" value="Add Work" class="button" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns large-6 medium-6 small-12">
            <div class="current-work">
                <div class="panel">
                    <div class="panel-heading aligncenter">
                        Current Works
                    </div>
                    <div class="panel-body">
                        <ul>
                            @foreach($works as $key => $work)
                                <li>
                                    {{ $work->title }}
                                    <form action="{{ url('/add-work/remove') }}" method="post">
                                        {{ csrf_field() }}
                                        <input type="hidden" name="id" value="{{ $work->id }}" />
                                        <input type="submit" value="Delete Work" />
                                    </form>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
