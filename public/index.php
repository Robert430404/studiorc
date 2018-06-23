<?php

/**
 * Returns a random hobby from a list.
 *
 * @return string
 */
function getRandomHobby(): string
{
    /**
     * Just a small list of hobbies that I enjoy.
     */
    $hobbies = [
        'programming',
        'skate boarding',
        'playing guitar',
        'drinking beer',
        'working',
    ];

    /**
     * Random index from the hobby list.
     */
    $hobby = array_rand($hobbies);

    return $hobbies[$hobby];
}

?>

<html>
<head>
    <title>Studio RC - The online home of Robert Joseph Cox Jr.</title>

    <!-- Additional Meta Tags For Display -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Load The External Styles -->
    <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
        integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
        crossorigin="anonymous"
    />
    <link
        href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700"
        rel="stylesheet"
    />
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
    />

    <!-- Load The Custom Styles -->
    <link
        rel="stylesheet"
        href="./css/index.css"
    />

    <!-- Register The Favicon -->
    <link
        rel="shortcut icon"
        href="./favicon.ico"
    />
</head>
<body>
<section class="Main__wrapper">
    <header>
        <img
            src="./img/headshot.jpeg"
            alt="Robert Joseph Cox Jr."
            class="Main__wrapper--headshot"
        />
        <h1>
            Studio <span class="Main__wrapper--bold">RC</span>
        </h1>
        <h2>
            Just a simple dude who enjoys
            <span class="Main__wrapper--bold">
                <?= getRandomHobby() ?>
            </span>
            <br/>
            and hanging with the family.
        </h2>
        <nav>
            <a
                href="https://twitter.com/robert430404"
                class="Main__wrapper--externalLink"
                target="_blank"
            >
                <i class="fab fa-twitter"></i>
            </a>
            <a
                href="https://github.com/Robert430404"
                class="Main__wrapper--externalLink"
                target="_blank"
            >
                <i class="fab fa-github"></i>
            </a>
            <a
                href="https://layer8.space/@robert"
                class="Main__wrapper--externalLink"
                target="_blank"
            >
                <i class="fab fa-mastodon"></i>
            </a>
            <span class="Main__wrapper--middot">
                &middot;
            </span>
            <a href="tel:+1-702-931-0866" class="Main__wrapper--telLink">
                702-931-0864
            </a>
        </nav>
        <section class="Main__wrapper--copyright">
            Copyright &copy; <span class="Main__wrapper--bold"><?= date('Y') ?></span>
        </section>
    </header>
</section>
</body>
</html>