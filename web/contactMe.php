<?php

    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];
    $subject=$_POST["subject"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\nMessage:\n $message";

		mail("amayaizcue@gmail.com", $subject, $mailBody, "From: $sender <$senderEmail>");

    ?>