<?php
session_start();

// Check if the user is already logged in, if yes, redirect to admin.php
if(isset($_SESSION["adloggedin"]) && $_SESSION["adloggedin"] === true){
    header("location: admin.php");
    exit;
}

// Database connection parameters
$servername = "localhost";
$username = "somu";
$password = "somu";
$database = "somu";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST"){
    // Retrieve username and password from the form
    $username = $_POST["username"];
    $password = $_POST["password"];

    // SQL query to fetch the user from the database
    $sql = "SELECT id, username, password FROM admin WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        // Verify plaintext password
        if($password === $row["password"]){
            // Set session variables
            $_SESSION["adloggedin"] = true;
            $_SESSION["ad_username"] = $row["username"];
            header("location: admin.php");
            exit;
        } else {
            $login_err = "Invalid username or password";
        }
    } else {
        $login_err = "Invalid username or password";
    }

    // Close statement
    $stmt->close();
}

// Close connection
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login</title>
    <style>
        /* Add some basic styling for the login form */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }
        form {
            width: 300px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #fff;
        }
        input[type="text"],
        input[type="password"],
        input[type="submit"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
        input[type="submit"]:hover {
            background-color: #45a049;
        }
        .error {
            color: red;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
    <h2>Admin Login</h2>
    <?php
    // Display error message if login failed
    if(isset($login_err)){
        echo '<p class="error">' . $login_err . '</p>';
    }
    ?>
    <label for="username">Username:</label>
    <input type="text" name="username" id="username" required>

    <label for="password">Password:</label>
    <input type="password" name="password" id="password" required>

    <input type="submit" value="Login">
</form>

</body>
</html>
