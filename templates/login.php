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
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
  </head>
  <body>
    <div id="form">
        <h1>Log In Form</h1>
        <form name="form" action="login.php" method="POST">
            <label>Enter Email/Username</label>
            <input type="text" id="user" name="user" required><br><br>
            <label>Enter Password</label>
            <input type="password" id="pass" name="pass" required><br><br>
            <input type="submit" id="btn" value="Login" name="submit"/>
        </form>
    </div>
  </body>
</html>
