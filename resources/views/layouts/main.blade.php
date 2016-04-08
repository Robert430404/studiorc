<!DOCTYPE html>
<html>
    <head>
        <title>Studio RC - Web Developement And Design - Robert Joseph Cox Jr. - Las Vegas, NV</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/foundation/6.2.0/foundation.min.css" />
        <link rel="stylesheet" href="{{ asset('/css/app.css') }}" />
    </head>

    <body>
        <div class="main-content">
            @yield('content')
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/foundation/6.2.0/foundation.min.js"></script>
        <script src="{{ asset('/js/all.js') }}"></script>
    </body>
</html>
