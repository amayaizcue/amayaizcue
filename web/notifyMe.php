<?php

		$senderEmail=$_POST["senderEmail"];

		$mailBody="Email: $senderEmail";

		mail("amayaizcue@gmail.com", "Subject", $mailBody, "From: prueba <$senderEmail>");

    ?>