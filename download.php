<?php

error_reporting(E_ALL);
ini_set('display_error',1);

//$myFile = scandir("uploads/")
//determine what to do based on GET variables
//if ($_GET['fName'] == $myFile) {

/*
$target_dir = "uploads/";
$target_file = $target_dir . "test.txt";

if (file_exists($target_file)) {
    header('Content-disposition: attachment; filename=someName.txt');
    readfile($target_file);
}
*/

//}
if (isset($_GET['link'])) {
    echo '<a href="uploads/test.txt">Download file if it exists</a>';

}


?>



