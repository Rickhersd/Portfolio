<?php

  if (isset($_POST['form__name'])){
      
    $name = $_POST['form__name'];
    $email = $_POST['form__email'];
    $content = $_POST['form__content'];

    $to = "rickhersd2002@gmail.com";
    $subject = "Hi, I'm" . $name;
    
    $message = "<b>This is HTML message.</b>";
    $message .= "<p>" . $content . "</p>";
    
    $header = "From:" . $email . "\r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/html\r\n";
    
    $retval = mail ($to,$subject,$message,$header);

    mail($to,$subject,$message,$header);

    if( $retval == true ) {
      echo "Email sent successfully :)";
    }else {
      echo "Oops! The Email couldn't be sent :(";
    }   
  }
?>