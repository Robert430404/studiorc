<!DOCTYPE html>
<html>
    <head>
        <title>Studio RC - Web Developement And Design - Robert Joseph Cox Jr. - Las Vegas, NV</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald:400,300,700|Raleway:400,300,700" />
        <link rel="stylesheet" href="{{ asset('/libs/foundation-sites/dist/foundation.min.css') }}" />
        <link rel="stylesheet" href="{{ asset('/libs/font-awesome/css/font-awesome.min.css') }}" />
        <link rel="stylesheet" href="{{ asset('/css/app.css') }}" />
    </head>

    <body>
        <div class="main-content">
            @yield('content')
        </div>
        <script src="{{ asset('/libs/jquery/dist/jquery.min.js') }}"></script>
        <script src="{{ asset('/libs/foundation-sites/dist/foundation.min.js') }}"></script>
        <script src="{{ asset('/js/all.js') }}"></script>
    </body>
</html>