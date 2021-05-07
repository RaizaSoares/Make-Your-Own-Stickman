<?php
require_once 'write.php';
if(isset($_GET['write']))
{
    write();
}

header('Location: mainpage.php?flag=1');
exit();
?>