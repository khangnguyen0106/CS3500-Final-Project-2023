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

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
  </head>
  <body>
    <div id="form">
        <h1>Sign Up Form</h1>
        <form name="form" action="signup.php" method="POST">
            <label>Enter Username</label>
            <input type="text" id="user" name="user" required><br><br>
            <label>Enter Email</label>
            <input type="email" id="email" name="email" required><br><br>
            <label>Enter Password</label>
            <input type="password" id="pass" name="pass" required><br><br>
            <label>Confirm Password</label>
            <input type="password" id="cpass" name="cpass" required><br><br>
            <input type="submit" id="btn" value="SignUp" name="submit"/>
        </form>
    </div>
  </body>
</html>
