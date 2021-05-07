<?php
require_once 'session.php';
    $address = '';
    if (isset($_GET['read'])) {

        modify();
        
    }
    header('Location: mainpage.php?flag=1');
    exit();
    
?>


