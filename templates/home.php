<!-- This file give user the top headlines without any filters -->
<?php
    session_start();
    $isSignedIn = isset($_SESSION['name']) && !empty($_SESSION['name']);
?>

<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>World News| Home </title>
  <link rel="stylesheet" />
  <!-- Link to Bootstrap's CSS first then main.css -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
  <link rel="stylesheet" href="../static/css/main.css" />
  <!-- Link to Bootstrap's JS and then main.js -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
    integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
    crossorigin="anonymous"></script>
  <script src="../static/js/index.js"></script>
</head>

<body>
  <header>
    <div id="navBarJS"></div>
  </header>
  <div class="container my-3">
  <?php
    if ($isSignedIn) {
        echo '<h1 id="welcomeMessage" class="display-4 text-center fs-1 fw-semibold">Welcome ' . $_SESSION['name'] . '!</h1>';
    } else {
        echo '<p id="headlineMessage" class="text-center fs-1 fw-semibold">Top Headlines</p>';
    }
  ?> 
    <div class="text-center">
      <div id="newsID"></div>
</body>

</html>
