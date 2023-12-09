<?php
    // Check if the form is submitted
    if(isset($_POST['submit'])) {
        // Include the connection file
        include "connection.php";

        // Get form data
        $username = mysqli_real_escape_string($conn, $_POST['user']);
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $password = mysqli_real_escape_string($conn, $_POST['pass']);
        $cpassword = mysqli_real_escape_string($conn, $_POST['cpass']);

        // Check if the username already exists
        $sql = "select * from users where username='$username'";
        $result = mysqli_query($conn, $sql);
        $count_user = mysqli_num_rows($result);

        // Check if the email already exists
        $sql = "select * from users where email='$email'";
        $result = mysqli_query($conn, $sql);
        $count_email = mysqli_num_rows($result);

        // Check both conditions
        if($count_user == 0 || $count_email == 0){
            if($password==$cpassword){
                // Hash the password
                $hash = password_hash($password, PASSWORD_DEFAULT);

                // Insert user into the database
                $sql = "insert into users(username, email, password) values('$username','$email', '$hash')";
                $result =  mysqli_query($conn, $sql);

                if($result) {
                    echo '<script>
                    alert("User registered successfully!");
                    window.location.href = "index.php";
                    </script>';
                } else {
                    echo '<script>
                    alert("Error registering user. Please try again.");
                    window.location.href = "signup.php";
                    </script>';
                }
            } else {
                echo '<script>
                alert("Passwords do not match!!!");
                window.location.href = "signup.php";
                </script>';
            }
        } else {
            echo '<script>
            alert("User already exists!!!");
            window.location.href = "index.php";
            </script>';
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sign Up Page</title>
  <!-- Link to Bootstrap's CSS first then main.css -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
   crossorigin="anonymous" />
 <link rel="stylesheet"  href="../static/cssmain.css"/>
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
                    <h1>Sign Up Form</h1>
                    <form name="form" action="signup.php" method="POST">
                        <div class="form-group mb-3-custom">
                            <label for="user">Enter Username</label>
                            <input type="text" class="form-control" id="user" name="user" required>
                        </div>
                        <div class="form-group mb-3-custom">
                            <label for="email">Enter Email</label>
                            <input type="email" class="form-control" id="email" name="email" required>
                        </div>
                        <div class="form-group mb-3-custom">
                            <label for="pass">Enter Password</label>
                            <input type="password" class="form-control" id="pass" name="pass" required>
                        </div>
                        <div class="form-group mb-3-custom">
                            <label for="cpass">Confirm Password</label>
                            <input type="password" class="form-control" id="cpass" name="cpass" required>
                        </div>
                        <div class="form-group text-center">
                            <input type="submit" class="btn btn-primary" id="btn" value="Sign Up" name="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>

