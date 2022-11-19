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
      $mail->SMTPDebug = SMTP::DEBUG_SERVER;                  
      $mail->isSMTP();                                           
      $mail->Host       = 'smtp.gmail.com';                     
      $mail->SMTPAuth   = true;                                  
      $mail->Username   = 'XXXX@gmail.com';                     
      $mail->Password   = 'XXXX';                               
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            
      $mail->Port       = 587;                                    

      //Recipients
      $mail->setFrom('XXXX@gmail.com', 'Mailer');
      $mail->addAddress('XXXX@gmail.com', 'Mailer');  

      //Content
      $mail->isHTML(true);                                 
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