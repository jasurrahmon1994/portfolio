<!DOCTYPE html>
<html lang="eng">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/assets/libs/owl_carousel/owl.carousel.min.css">
    <link rel="stylesheet" href="/assets/libs/owl_carousel/owl.theme.default.min.css">
    <link rel="stylesheet" href="/assets/fonts/fawesome.css">
    <link rel="stylesheet" href="/assets/styles/navfooter.css">
    
    <?php
    if ($page == 'index') {
        echo '<link rel="stylesheet" href="/assets/styles/index.css">';
    }
    ?>
    <link rel="stylesheet" href="/assets/styles/gold.css">

    <title>Jasur Rahmonov || Personal Portfolio</title>
</head>
<header class="header">
    <div class="container">
        <div class="intro-link">
            <div class="logo">
                <a href="/">JR</a>
            </div>
            <div class="hamburger-btn outer-shadow hover-in-shadow">
                <span></span>
            </div>
        </div>
    </div>

</header>
<nav class="nav-menu">
    <div class="close-nav-menu outer-shadow hover-in-shadow">&times;</div>
    <div class="nav-menu-inner">
        <ul>
            <li><a href="#home" class="link-item inner-shadow active">home</a></li>
            <li><a href="#about" class="link-item outer-shadow hover-in-shadow">about</a></li>
            <li><a href="#services" class="link-item outer-shadow hover-in-shadow">services</a></li>
            <li><a href="#portfolio" class="link-item outer-shadow hover-in-shadow">portfolio</a></li>
            <!-- <li><a href="#" class="outer-shadow hover-in-shadow">feedback</a></li> -->
            <li><a href="#contact" class="link-item outer-shadow hover-in-shadow">contact</a></li>
        </ul>
    </div>
    <p class="copyright-text">&copy; 2020 Jasur Rahmonov</p>
</nav>