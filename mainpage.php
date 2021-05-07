<?php
session_start();
if (!isset($_GET['flag'])) {
$_SESSION["head"] = "stickman-head_Default.png";
$_SESSION["larm"] = "stickman-lArm_Default.png";
$_SESSION["rarm"] = "stickman-rArm_Default.png";
$_SESSION["legs"] = "stickman-legs_Default.png";
$_SESSION["body"] = "stickman-body_Default.png";
$_SESSION["FLAG"] = "0";
}

?>
<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Stickman</title>
    <link href="style1.css" rel="stylesheet" type="text/css" />
    <script src="script.js"></script>

  </head>

    <body class="bghome">
		<div class="header">
      <h1>Stickman Game</h1>
      <p>Design your very own stickman</p>
    </div>

    <ul class = "uld">
      <li><a href="mainpage.php">Home</a></li>
      <li><a href="help.html">Help</a></li>
      <li><a href="fileManagement.html">File Management</a></li>
     
    </ul>


<div class= "pne" "rmline">
<div class= "rmLine">
  <img id="head" src="<?php echo $_SESSION["head"]; ?>"/>
</div>
<div class= "rmLine">
  <img id= "larm" src="<?php echo $_SESSION["larm"]; ?>"/><img id="body" src="<?php echo $_SESSION["body"]; ?>"/><img id="rarm" src="<?php echo $_SESSION["rarm"]; ?>"/>
</div>
<div class= "rmLine">
  <img id="legs" src="<?php echo $_SESSION["legs"]; ?>"/>
</div>
</div>

<div>
  <table id="matrix">
    <tr>
      <td><button id="hbasic" class="button2">head-basic</button></td>
      <td><button id="bbasic" class="button2">body-basic</button></td>
      <td><button id="lbasic" class="button2">lArm-basic</button></td>
      <td><button id="rbasic" class="button2">rArm-basic</button></td>
      <td><button id="legbasic" class="button2">legs-basic</button></td>
      <td><button id="basic" class="button3">Basic Stickman</button></td>
      <td><button id= "save" class="button">Save</button></td>


    </tr>
  
    <tr>
      <td><button id="hat" class="button2">pirateHat</button></td>
      <td><button id="belt" class="button2">pirateBelt</button></td>
      <td><button id="hook" class="button2">pirateHook</button></td>
      <td><button id="sword" class="button2">pirateSword</button></td>
      <td><button id="boots" class="button2">pirateBoots</button></td>
      <td><button id="pirate" class="button3">PirateStickman</button></td>
      <td><button id= "undo" class="button">Undo</button></td>

    </tr>

    <tr>
      <td><button id="beard" class="button2">lepBeard</button></td>
      <td><button id="gshirt" class="button2">lepShirt</button></td>
      <td><button id="gold" class="button2">lepGold</button></td>
      <td><button id="sham" class="button2">lepSham</button></td>
      <td><button id="shoes" class="button2">lepShoes</button></td>
      <td><button id="lep" class="button3">Lep Stickman</button></td>
      <td><button id="redo" class="button">Redo</button></td>

    </tr>

    <tr>
      <td><p>Head</p></td>
      <td><p>Body</p></td>
      <td><p>Left Arm</p></td>
      <td><p>Right Arm</p></td>
      <td><p>Legs</p></td>
      <td><p>Complete</p></td>
      <td><p>Other</p></td>
    </tr>
  </table>
</div>

<input type="hidden" id="hHid" name="hHid" value= <?php echo $_SESSION["head"]; ?> />
<input type="hidden" id="lHid" name="lHid" value= <?php echo $_SESSION["larm"]; ?> />
<input type="hidden" id="rHid" name="rHid" value= <?php echo $_SESSION["rarm"]; ?> />
<input type="hidden" id="bHid" name="bHid" value= <?php echo $_SESSION["body"]; ?> />
<input type="hidden" id="legHid" name="legHid" value= <?php echo $_SESSION["legs"]; ?> />
<input type="hidden" id="FLAG" name="FLAG" value= <?php echo $_SESSION["FLAG"]; ?> />


    </body>
	
</html>
