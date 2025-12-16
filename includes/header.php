<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title><?= $pageTitle ?? 'KanakTools - Your Daily Tools, All in One Place' ?></title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>

<!-- Header -->
<header>
    <div class="container header-container">
        <a href="/index.php" class="logo">Kanak<span>Tools</span></a>

        <nav>
            <ul>
                <li><a href="/index.php">Home</a></li>
                <li><a href="/index.php#tools">Tools</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

        <div class="contact-email">
            <i class="fas fa-envelope"></i>
            <span>kanaktools@gmail.com</span>
        </div>

        <button class="mobile-menu-btn">
            <i class="fas fa-bars"></i>
        </button>
    </div>
</header>
