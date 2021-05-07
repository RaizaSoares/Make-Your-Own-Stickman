<?php
require_once 'upload.php'; //this is how to import/include another php file

error_reporting(E_ALL);
ini_set('display_error',1);

//determine what to do based on GET variables
if (isset($_GET['up'])) {
    upload();
}

header('Location: mainpage.php');
exit();
?>




