<?php

$server = "198.71.225.52";
$username = "olvapeshopadmin";
$password = "qwerty123";
$dbname = "onlinevapeshopdb";

$link = mysqli_connect($server,$username,$password, $dbname) or die("Connection failed: " . mysqli_connect_error());

?>