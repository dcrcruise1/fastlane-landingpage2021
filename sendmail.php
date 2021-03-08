<?php
require 'phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 4;                               // Enable verbose debug output

$mail->isMail();                                      // Set mailer to use SMTP
$mail->Host = 'localhost';  // Specify main and backup SMTP servers
$mail->SMTPAuth = false;                               // Enable SMTP authentication
$mail->SMTPAutoTLS=false;

$mail->Port = 25;                                    // TCP port to connect to

$mail->setFrom('info@fastlaneswimming.org', 'FLS Landing Page');
$mail->addAddress('info@fastlaneswimming.org');     // Add a recipient


$mail->isHTML(false);                                  // Set email format to HTML

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$interest = $_POST['interest'];
$details = $_POST['details'];




$mail->Subject = 'Fastlane Swimming Program & Membership Inquiry';
$mail->Body    = <<<EOD
Name: $firstname $lastname 

Email: $email 

Phone: $phone

Interest: $interest

Details: $details
EOD;



if(!$mail->send()) {
    echo 'Message could not be sent.';
    //echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent.';
}