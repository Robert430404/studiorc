<!DOCTYPE html>
<html>
    <head>
        <title>Studio RC - Web Developement And Design - Robert Joseph Cox Jr. - Las Vegas, NV</title>
        <link rel="stylesheet" href="{{ asset('/libs/foundation-sites/dist/foundation.min.css') }}" />
        <link rel="stylesheet" href="{{ asset('/css/app.css') }}" />
    </head>

    <body>
        <div class="main-content">
            @yield('content')
        </div>

        <script src="{{ asset('/libs/jquery/dist/jqeury.min.js') }}"></script>
        <script src="{{ asset('/libs/foundation-sites/dist/foundation.min.js') }}"></script>
        <script src="{{ asset('/js/all.js') }}"></script>
    </body>
</html>
