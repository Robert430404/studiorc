@extends('layouts.main')

@section('content')

    <div class="introduction">
        <div class="row fluid">
            <div class="columns large-6 large-offset-3 medium-8 medium-offset-2 small-12 small-offset-0">
                <h1 class="aligncenter heading">Studio <span class="highlight">RC</span></h1>
                <h3 class="aligncenter sub-heading">ROBERT COX - LAS VEGAS, NV - 702.443.3886</h3>
                <ul class="social menu horizontal">
                    <li class="icon"><a href="https://www.facebook.com/Psyco430404" target="_blank"><i class="fa fa-facebook"></i></a></li>
                    <li class="icon"><a href="https://twitter.com/psyco430404" target="_blank"><i class="fa fa-twitter"></i></a></li>
                    <li class="icon"><a href="https://github.com/Robert430404" target="_blank"><i class="fa fa-github"></i></a></li>
                </ul>
            </div>
        </div>
    </div>

    <div class="examples">
        <h2 class="aligncenter heading">Some Of My Work</h2>
        <div class="row">
            @foreach($works as $key => $work)
                <div class="columns large-3 medium-4 small-6 work">
                    <a href="{{ $work->link }}" target="_blank" class="work" style="background-image: url({{ asset('/work-image/' . $work->image) }});"></a>
                </div>
            @endforeach
        </div>
    </div>

    <div class="about">
        <h2 class="aligncenter heading">Who Is Robert Cox</h2>
        <div class="row">
            <div class="columns large-8 medium-6 small-12 about-text">
                <p>
                    I am a passionate developer living in Las Vegas, NV. Bringing amazing user experiences to people through the web is what makes me get up in the morning and go to work.
                </p>
                <p>
                    Being able to work with the latest technologies, whether thats PHP 7 in Laravel or using Babel to create interactive user interfaces with ES6, really excites me.
                </p>
                <p>
                    I specialize in PHP and JavaScript development, and have skills in a variety of different frameworks. I have built user portals in Laravel and I've also made Hybrid Mobile Applications in Ionic.
                </p>
                <p>
                    No matter what I will find a way to create an elegant, maintainable, and updatable solution to any problem that comes my way.
                </p>
            </div>
            <div class="columns large-4 medium-6 small-12 image-container">
                <img src="https://s3-us-west-1.amazonaws.com/sutiodrc-portfolio/images/robert-cox-headshot.jpg" />
            </div>
        </div>
    </div>

    <div class="contact">
        <h2 class="aligncenter heading">Send Me An Email</h2>
        <form class="form" method="post" action="{{ url('/email') }}">
            @if (count($errors) > 0)
                <div class="errors row">
                    @foreach ($errors->all() as $error)
                        <div class="columns large-6 medium-6 small-12 error">{{ $error }}</div>
                    @endforeach
                </div>
                <script type="text/javascript">
                    document.addEventListener("DOMContentLoaded", function(event) {
                        $('html, body').animate({
                            scrollTop: $(document).height()
                        }, 1500);
                    });
                </script>
            @endif
            {{ csrf_field() }}
            <input type="text" name="honeypot" id="honeypot" style="position: fixed; top: -1000000px;" />
            <div class="row">
                <div class="columns large-6 medium-6 small-12">
                    <label>
                        Your Full Name <span class="highlight">*</span>
                        <input type="text" name="name" id="name" class="form-control name" />
                    </label>
                </div>
                <div class="columns large-6 medium-6 small-12">
                    <label>
                        Your E-Mail Address <span class="highlight">*</span>
                        <input type="text" name="email" id="email" class="form-control email" />
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="columns large-6 medium-6 small-12">
                    <label>
                        Your Phone Number <span class="highlight">*</span>
                        <input type="text" name="phone" id="phone" class="form-control phone" />
                    </label>
                </div>
                <div class="columns large-6 medium-6 small-12">
                    <label>
                        Your E-Mail Subject <span class="highlight">*</span>
                        <input type="text" name="subject" id="subject" class="form-control subject" />
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="columns large-12 medium-12 small-12">
                    <label>
                        Your Message <span class="highlight">*</span>
                        <textarea name="message" id="message" class="form-control message"></textarea>
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="columns large-12 medium-12 small-12">
                    <input type="submit" value="Contact Me" class="button" />
                </div>
            </div>
        </form>
    </div>

@endsection
