<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/PHPMailer/src/Exception.php';
require 'phpmailer/PHPMailer/src/PHPMailer.php';
require 'phpmailer/PHPMailer/src/SMTP.php';

send();

function send(){
  if (isset($_POST['form__name']) && isset($_POST['form__email']) && isset($_POST['form__content'])){

    $name = $_POST['form__name'];
    $email = $_POST['form__email'];
    $content = $_POST['form__content'];

    $mail = new PHPMailer(true);
    try {
      //Server settings
      $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
      $mail->isSMTP();                                            //Send using SMTP
      $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
      $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
      $mail->Username   = 'ricardosanchez.webdev@gmail.com';                     //SMTP username
      $mail->Password   = 'RickWeb2002Dev*';                               //SMTP password
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
      $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

      //Recipients
      $mail->setFrom('ricardosanchez.webdev@gmail.com', 'Mailer');
      $mail->addAddress('rickhersd2002@gmail.com', 'Mailer');     //Add a recipient

      //Content
      $mail->isHTML(true);                                  //Set email format to HTML
      $mail->Subject = 'Contact Email';
      $mail->Body    = 'Name: ' . $name . '<br>Email: ' . $email . '<br>Content: ' . $content;

      $mail->send();
      echo "Email sent successfully :)";
    } catch (Exception $e) {
      echo "Oops! The Email couldn't be sent :(";
    }
  } else {
    return;
  }
}
  
?>