<?php
    session_start();
    function modify() {

        $stri = '';
        $arr = array();
        
        $file = fopen("uploads/test.txt", 'r');
        while (!feof($file))  //feof equivalent to C++ fin.eof()
        {
            $line = fgets($file);
            $stri .= $line.',';
            array_push($arr , $line);
        }
        //convert arr to string

        fclose($file);
    
        $array = explode(",", $stri); 
        $_SESSION["head"] = $array[0];
        $_SESSION["larm"] = $array[1];
        $_SESSION["rarm"] = $array[2];
        $_SESSION["body"] = $array[3];
        $_SESSION["legs"] = $array[4];
        $_SESSION["FLAG"] = "1";
    
}
    

?>