<?php

$servername = "md15marathon.db.11523799.hostedresource.com";//"localhost";
$username = "md15marathon";//"username";
$password = "Admin#123";//"password";
$dbname = "md15marathon";//"myDB";


/*
$servername = "localhost";//"localhost";
$username = "root";//"username";
$password = "root";//"password";
$dbname = "marathon";//"myDB";
*/
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {    
	echo "Work in progress . . .<br>";	
	echo "Visit us in a while<br>";	
	//echo "Connection failed:  $conn";
	//header('Refresh: 3; url=index.html');
	
} 


/*
// sql to create table
$sql = "CREATE TABLE marathon (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
Name VARCHAR(30) NOT NULL,
Sex VARCHAR(6),
Age VARCHAR(10),
Bloodgroup VARCHAR(8),
Email VARCHAR(50),
Phone VARCHAR(14),
Emergency VARCHAR(14),
Package VARCHAR(20),
Size VARCHAR(10),
reg_date TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table Marathon created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

*/


$name = $_POST["name"];
$sex = $_POST["sex"];
$age = $_POST["age"];
$bloodgroup = $_POST["bloodgroup"];
$email = $_POST["email"]; 
//$email=mysql_real_escape_string($email);
$phone = $_POST["phone"];
$ephone = $_POST["ephone"];
$package = $_POST["pkg"]; 
$size = $_POST["size"]; 

$sql = "INSERT INTO marathon (Name, Sex, Age, Bloodgroup, Email, Phone, Emergency, Package, Size) VALUES('$name', '$sex', '$age', '$bloodgroup', '$email', '$phone', '$ephone', '$package', '$size');";
if ($conn->query($sql) === TRUE) {	
	$last_id = mysqli_insert_id($conn);
    echo $last_id;
} 
else {
	echo "FAIL"; 
    //echo "Error: " . $sql . "<br>" . $conn->error;	 	
}



$conn->close();
?>