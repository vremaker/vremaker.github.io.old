<?php
  if(isset($_POST["email"]) && isset($_POST["message"]) &&
    isset($_POST["subject"]) && isset($_POST["name"]) ){
    $msg = "name: " . $_POST["name"] . "\n " . "message " . $_POST["message"];
    $msg = wordwrap($msg, 70);
    $msg = $msg . "\n" . "email: " . $_POST["email"];
    $subject = "subject " . $_POST["subject"];
    mail('vremaker@gmail.com', $subject, $msg);
    echo "success!";
  } else {
    header("HTTP/1.1 400 Invalid Request");
    header("Content-Type: text/plain");
    echo "error, missing fields!";
  }
?>
