<?php
    // Include the connection file or create a new connection
    include "connection.php"; // Assuming your connection is defined in this file

    if(isset($_POST['submit'])){
        $username = mysqli_real_escape_string($conn, $_POST['user']);
        $password = mysqli_real_escape_string($conn, $_POST['pass']);

        $sql = "select * from users where username = '$username' or email='$username'";
        $result = mysqli_query($conn, $sql);

        // Check for errors in the query execution
        if (!$result) {
            die("Query failed: " . mysqli_error($conn));
        }

        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);

        if($row){
            // Use correct array key for the password field
            if(password_verify($password, $row["password"])){
               $sql = "select username from users where username ='$username' or email= '$username'";
               $r = mysqli_fetch_array(mysqli_query($conn, $sql));
               session_start();
               $_SESSION ['name'] = $row['username'];
               
                header("Location: home.php");
                exit();
            }
        } else {
            echo '<script>
                alert("Invalid username/email or password!!");
                window.location.href = "login.php";
            </script>';
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Log In Page</title>
  <!-- Link to Bootstrap's CSS first then main.css -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
   crossorigin="anonymous" />
 <link rel="stylesheet"  href="../static/css/main.css"/>
  <!-- Link to Bootstrap's JS and then main.js -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
    integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
    crossorigin="anonymous"></script>
  <script src="../static/js/index.js"></script>
  <style>
        body {
            background-color: #f8f9fa;
        }

        #form {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-top: 50px;
        }

        h1 {
            text-align: center;
        }
    </style>
</head>
<body>
    <header>
        <div id="navBarJS"></div>
    </header>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6 col-sm-8 col-xs-12">
                <div id="form">
                    <h1>Log In Form</h1>
                    <form name="form" action="login.php" method="POST">
                        <div class="form-group">
                            <label for="user">Enter Email/Username</label>
                            <input type="text" class="form-control" id="user" name="user" required>
                        </div>
                        <div class="form-group">
                            <label for="pass">Enter Password</label>
                            <input type="password" class="form-control" id="pass" name="pass" required>
                        </div>
                        <div class="form-group text-center">
                            <input type="submit" class="btn btn-primary" id="btn" value="Login" name="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>

