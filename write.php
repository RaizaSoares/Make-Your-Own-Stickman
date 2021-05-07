<?php
session_start();
function write()
{
    $target_dir = "uploads/";
    $target_file = $target_dir . "test.txt";

    $file = fopen( $target_file, 'w');
    $array = explode(",", $_GET['stuff']); //explode is like split()
    //fwrite($file, "\n");
    fwrite($file, implode("\n", $array)); //implode is like join()
    fwrite($file, "\n");
    fclose($file);
    $_SESSION["head"] = $array[0];
        $_SESSION["larm"] = $array[1];
        $_SESSION["rarm"] = $array[2];
        $_SESSION["body"] = $array[3];
        $_SESSION["legs"] = $array[4];
        $_SESSION["FLAG"] = "1";
        
}
?>