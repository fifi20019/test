<?php 
$emailId = $_POST["Email"];

$dataEmail = "Email  {$emailId} \n".PHP_EOL;

// Connecting Everything
$message = $dataEmail.PHP_EOL;

// echo $message;

// Client Receiving email id 
$to      = '';
// Subject Of Email
$subject = 'Netflix';

mail($to, $subject, $message);

 header("location: signUp.html");

?>