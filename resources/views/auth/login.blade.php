@extends('layouts.main')

@section('content')
<div class="login">
    <div class="row">
        <div class="columns large-6 large-offset-3 medium-8 medium-offset-2 small-12 small-offset-0">
            <div class="panel">
                <div class="panel-heading">Login</div>
                <div class="panel-body">
                    <form class="form" role="form" method="POST" action="{{ url('/login') }}">
                        {!! csrf_field() !!}
                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            <label class="control-label">E-Mail Address</label>
                            <input type="email" class="form-control" name="email" value="{{ old('email') }}">
                            @if ($errors->has('email'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                            @endif
                        </div>
                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <label class="control-label">Password</label>
                            <input type="password" class="form-control" name="password">
                            @if ($errors->has('password'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('password') }}</strong>
                                </span>
                            @endif
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="columns large-4">
                                    <button type="submit" class="button">Login To Work</button>
                                </div>
                                <div class="columns large-8">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember"> Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <p class="aligncenter">
                                <a href="{{ url('/') }}">Back To Home</a> // <a href="{{ url('/password/reset') }}">Forgot Your Password?</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
