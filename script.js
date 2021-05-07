var arr=[];
var aImgs={};
var aPNGs={};
var defaultVals={};
var currents={};
var pirateArray = ["hat", "sword", "hook", "belt", "boots"];
var lepArray = ["beard", "sham", "gold", "gshirt", "shoes"];
var basicArray = ["bbasic", "lbasic", "rbasic", "hbasic", "legbasic"];
var loadArray = [];
iniAssociatedImgs();
var hist = new History();

function iniAssociatedImgs(){
aImgs["gold"] = "larm";
aImgs["hook"] = "larm";
aImgs["sham"] = "rarm";
aImgs["sword"] = "rarm";
aImgs["gshirt"] = "body";
aImgs["hat"] = "head";
aImgs["beard"] = "head";
aImgs["shoes"] = "legs";
aImgs["boots"] = "legs";
aImgs["belt"] = "body";

aImgs["bbasic"] = "body"
aImgs["lbasic"] = "larm";
aImgs["rbasic"]= "rarm";
aImgs["hbasic"]= "head";
aImgs["legbasic"] = "legs";

aPNGs["gold"] = "stickman-lArm_Leprechaun-gold.png";
aPNGs["sham"]= "stickman-rArm_Leprechaun-shamrock.png";
aPNGs["gshirt"]="stickman-body_Leprechaun-greenShirt.png";
aPNGs["beard"] = "stickman-head_Leprechaun-beard.png";
aPNGs["shoes"] = "stickman-legs_Leprechaun-shoe.png";

aPNGs["hook"] = "stickman-lArm_Pirate-hook.png";
aPNGs["sword"] = "stickman-rArm_Pirate-sword.png";
aPNGs["boots"] = "stickman-legs_Pirate-boots.png";
aPNGs["hat"] = "stickman-head_Pirate-hat.png";
aPNGs["belt"] = "stickman-body_Pirate-belt.png";

aPNGs["bbasic"] = "stickman-body_Default.png";
aPNGs["lbasic"] = "stickman-lArm_Default.png";
aPNGs["rbasic"]= "stickman-rArm_Default.png";
aPNGs["hbasic"]= "stickman-head_Default.png";
aPNGs["legbasic"] = "stickman-legs_Default.png";

currents["head"]= aPNGs["hbasic"]
currents["body"] = aPNGs["bbasic"];
currents["larm"] = aPNGs["lbasic"];
currents["rarm"]= aPNGs["rbasic"];
currents["legs"] = aPNGs["legbasic"];

defaultVals["head"] = aPNGs["hbasic"];
defaultVals["body"] = aPNGs["bbasic"];
defaultVals["larm"] = aPNGs["lbasic"];
defaultVals["rarm"]= aPNGs["rbasic"];
defaultVals["legs"] = aPNGs["legbasic"];

}

window.onload = function() {
  document.getElementById("bbasic").onclick = function() {
    checkIfmod();
    var el =   document.getElementById("body");
        
     el.src ="stickman-body_Default.png";
     currents["body"] = aPNGs["bbasic"];
     letterEvent(this)
     
      }
  document.getElementById("lbasic").onclick = function() {
    checkIfmod();
    var el =   document.getElementById("larm");
        
     el.src ="stickman-lArm_Default.png";
     currents["larm"] = aPNGs["lbasic"];
     letterEvent(this)
     
    }
  
  document.getElementById("rbasic").onclick = function() {
    checkIfmod();

    var el =   document.getElementById("rarm");
        
     el.src ="stickman-rArm_Default.png";
     currents["rarm"] = aPNGs["rbasic"];
     letterEvent(this)
     
    }
  document.getElementById("hbasic").onclick = function() {
    checkIfmod();

    var el =   document.getElementById("head");
        
     el.src ="stickman-head_Default.png";
     currents["head"] = aPNGs["hbasic"];
     letterEvent(this)
     
    }

  document.getElementById("legbasic").onclick = function() {
    checkIfmod();
    var el =   document.getElementById("legs");
        
     el.src ="stickman-legs_Default.png";
     currents["legs"] = aPNGs["legbasic"];
     letterEvent(this)
     
    }
  

  document.getElementById("gold").onclick = function() {
    checkIfmod();
	var el =   document.getElementById("larm");
      
   el.src ="stickman-lArm_Leprechaun-gold.png";
   currents["larm"]= aPNGs["gold"];
   letterEvent(this)
   
    }
  
  document.getElementById("hook").onclick = function() {
    checkIfmod();
	var el2 =   document.getElementById("larm");
      
   el2.src ="stickman-lArm_Pirate-hook.png";
   currents["larm"] = aPNGs["hook"];
   letterEvent(this)
  }
  
  document.getElementById("sham").onclick = function() {
    checkIfmod();
	var el3 =   document.getElementById("rarm");
      
   el3.src ="stickman-rArm_Leprechaun-shamrock.png";
   currents["rarm"] = aPNGs["sham"];
   letterEvent(this)
  }

  document.getElementById("sword").onclick = function() {
    checkIfmod();
	var el4 =   document.getElementById("rarm");
      
   el4.src ="stickman-rArm_Pirate-sword.png";
   currents["rarm"] = aPNGs["sword"];
   letterEvent(this)
  }

  document.getElementById("gshirt").onclick = function() {
    checkIfmod();
	var el5 =   document.getElementById("body");
      
   el5.src ="stickman-body_Leprechaun-greenShirt.png";
   currents["body"] = aPNGs["gshirt"];
   letterEvent(this)
  }

  document.getElementById("hat").onclick = function() {
    checkIfmod();
	var el6 =   document.getElementById("head");
      
   el6.src ="stickman-head_Pirate-hat.png";
   currents["head"] = aPNGs["hat"];
   letterEvent(this)
  }

  document.getElementById("beard").onclick = function() {
    checkIfmod();
	var el6 =   document.getElementById("head");
      
   el6.src ="stickman-head_Leprechaun-beard.png";
   currents["head"] = aPNGs["beard"];
   letterEvent(this)
  }

  document.getElementById("shoes").onclick = function() {
    checkIfmod();
	var el7 =   document.getElementById("legs");
      
   el7.src ="stickman-legs_Leprechaun-shoe.png";
   currents["legs"] = aPNGs["shoes"];
   letterEvent(this)
  }

  document.getElementById("boots").onclick = function() {
    checkIfmod();
	var el8 =   document.getElementById("legs");
      
   el8.src ="stickman-legs_Pirate-boots.png";
   currents["legs"]= aPNGs["boots"];
   letterEvent(this)
  }

  document.getElementById("belt").onclick = function() {
    checkIfmod();
	var el8 =   document.getElementById("body");
  currents["body"] = aPNGs["belt"];
      
   el8.src ="stickman-body_Pirate-belt.png";
   letterEvent(this)
  }

  document.getElementById("basic").onclick = function() {
    checkIfmod();
    var el9 =   document.getElementById("head");
    el9.src ="stickman-head_Default.png";
    el9 =   document.getElementById("body");
    el9.src ="stickman-body_Default.png";
    el9 =   document.getElementById("larm");
    el9.src ="stickman-lArm_Default.png";
    el9 =   document.getElementById("rarm");
    el9.src ="stickman-rArm_Default.png";
    el9 =   document.getElementById("legs");
    el9.src ="stickman-legs_Default.png";

    changeCurrentstobasic();

    letterEvent(this)
  }

  document.getElementById("pirate").onclick = function() {
  checkIfmod();
	
  var el2 =   document.getElementById("larm");
  el2.src ="stickman-lArm_Pirate-hook.png";
  el2 =   document.getElementById("rarm");   
  el2.src ="stickman-rArm_Pirate-sword.png";
  el2 =   document.getElementById("head");
  el2.src ="stickman-head_Pirate-hat.png";
  el2 =   document.getElementById("legs");   
  el2.src ="stickman-legs_Pirate-boots.png";
  el2 =   document.getElementById("body");
  el2.src ="stickman-body_Pirate-belt.png";
  changeCurrentstopirate();
  letterEvent(this)
  }

  document.getElementById("lep").onclick = function() {
    checkIfmod();
   var el =   document.getElementById("larm");     
   el.src ="stickman-lArm_Leprechaun-gold.png";
   el =  document.getElementById("rarm");  
   el.src ="stickman-rArm_Leprechaun-shamrock.png";
   el =   document.getElementById("body");  
   el.src ="stickman-body_Leprechaun-greenShirt.png";
   el =   document.getElementById("legs");
   el.src ="stickman-legs_Leprechaun-shoe.png";
   el =   document.getElementById("head");
   el.src ="stickman-head_Leprechaun-beard.png";
    changeCurrentstolep();
   letterEvent(this)
  }

  
  document.getElementById("undo").onclick = 
  hist.undoCmd;
  document.getElementById("redo").onclick = hist.redoCmd;

  document.getElementById("save").onclick = function(){
    writeFile();
  }
  //rotate through body images HOT KEYS
  document.body.onkeydown = function (e) {
    if (e.shiftKey && e.which== 66) { //B
       document.getElementById("belt").click();
    }
    else if(e.shiftKey && e.which== 71){ //G
      document.getElementById("gshirt").click();

    }
    else if(e.shiftKey && e.which== 81) //Q
    {
      document.getElementById("bbasic").click();
    }
    //rotate through head images
    else if(e.shiftKey && e.which== 72) //H
    {
      document.getElementById("hat").click();
    }
    else if(e.shiftKey && e.which== 76) //L
    {
      document.getElementById("beard").click();
    }
    else if(e.shiftKey && e.which== 68) //D
    {
      document.getElementById("hbasic").click();
    }
    //rotate through left arm images
    else if(e.shiftKey && e.which== 67) //C
    {
      document.getElementById("gold").click();
    }
    else if(e.shiftKey && e.which== 69) //E
    {
      document.getElementById("hook").click();
    }
    else if(e.shiftKey && e.which== 75) //K
    {
      document.getElementById("lbasic").click();
    }

    //rotate through RIGHT arm images
    else if(e.shiftKey && e.which== 70) //F
    {
      document.getElementById("sham").click();
    }
    else if(e.shiftKey && e.which== 73) //I
    {
      document.getElementById("sword").click();
    }
    else if(e.shiftKey && e.which== 74) //J
    {
      document.getElementById("rbasic").click();
    }

    //rotate through leg images
    else if(e.shiftKey && e.which== 77) //M
    {
      document.getElementById("shoes").click();
    }
    else if(e.shiftKey && e.which== 78) //N
    {
      document.getElementById("boots").click();
    }
    else if(e.shiftKey && e.which== 79) //O
    {
      document.getElementById("legbasic").click();
    }

 }
  
}



function setDefault(){
  
    var el9 =   document.getElementById("head");
    el9.src = defaultVals["head"];
    el9 =   document.getElementById("body");
    el9.src = defaultVals["body"];
    el9 =   document.getElementById("larm");
    el9.src = defaultVals["larm"];
    el9 =   document.getElementById("rarm");
    el9.src = defaultVals["rarm"];
    el9 =   document.getElementById("legs");
    el9.src = defaultVals["legs"];
    changeCurrentstodef();
    
    

}
// UNDO REDO

function History() {  //GRADING: MANAGE
	var commands =[];
	var index = 0
	
	this.executeAction = function(cmd){
		commands.length = index; 
    //GRADING: ACTION
		commands.push(cmd);
		index = commands.length
		cmd.exec();	
       }
 this.undoCmd = function(){ 
		if(index > 0) {
			var cmd = commands[index-1];
			cmd.undo();
			index= index - 1;
		}
	}
	
	this.redoCmd = function(){ 
		if(index < commands.length) {
			var cmd = commands[index];
			cmd.exec();
			index = index + 1;
		}
	}
	
}

//GRADING: COMMAND
function UndoRedo(letter){
	this.letter = letter;
	
	this.exec = function(){
    var temp = this.letter;
    arr.push(temp); 
    helper();
	}
	
	this.undo = function(){
    arr.pop();
    helper();
  }

  
  
}

function helper(){
  setDefault();
  var i;
  for (i = 0; i < arr.length; i++) {
  if(arr[i]=="pirate")
  {
    changeCurrentstopirate();
    var j
    for(j=0; j< pirateArray.length; j++)
    {
      var el = document.getElementById(aImgs[pirateArray[j]]);
      el.src = aPNGs[pirateArray[j]];
    }
  }
  else if(arr[i]=="lep")
  {
    changeCurrentstolep();
    var j
    for(j=0; j< lepArray.length; j++)
    {
      var el = document.getElementById(aImgs[lepArray[j]]);
      el.src = aPNGs[lepArray[j]];
    }
  }

  else if(arr[i]=="basic")
  {
    changeCurrentstobasic();
    var j
    for(j=0; j< basicArray.length; j++)
    {
      var el = document.getElementById(aImgs[basicArray[j]]);
      el.src = aPNGs[basicArray[j]];
    }
  }
  
  else
  {
    var el = document.getElementById(aImgs[arr[i]]);
    el.src = aPNGs[[arr[i]]];
    currents[aImgs[arr[i]]] = aPNGs[arr[i]];
  }
}
}



//map UndoRedos onto buttons
function letterEvent(event) { 
	if( event.id == "gold" )
		hist.executeAction(new UndoRedo("gold"));
  else if(event.id == "hook" )
		hist.executeAction(new UndoRedo("hook"));
  else if(event.id == "sham" )
		hist.executeAction(new UndoRedo("sham"));
  else if(event.id == "sword" )
		hist.executeAction(new UndoRedo("sword"));
  else if(event.id == "belt" )
		hist.executeAction(new UndoRedo("belt"));
  else if(event.id == "gshirt" )
		hist.executeAction(new UndoRedo("gshirt"));
  else if(event.id == "beard" )
		hist.executeAction(new UndoRedo("beard"));
  else if(event.id == "hat" )
		hist.executeAction(new UndoRedo("hat"));
  else if(event.id == "shoes" )
		hist.executeAction(new UndoRedo("shoes"));
  else if(event.id == "boots" )
    hist.executeAction(new UndoRedo("boots"));
  else if(event.id == "bbasic" )
    hist.executeAction(new UndoRedo("bbasic"));
  else if(event.id == "lbasic" )
    hist.executeAction(new UndoRedo("lbasic"));
  else if(event.id == "rbasic" )
  hist.executeAction(new UndoRedo("rbasic"));
  else if(event.id == "hbasic" )
  hist.executeAction(new UndoRedo("hbasic"));
  else if(event.id == "legbasic" )
  hist.executeAction(new UndoRedo("legbasic"));
  else if(event.id == "pirate" )
		hist.executeAction(new UndoRedo("pirate"));
  else if(event.id == "lep" )
		hist.executeAction(new UndoRedo("lep"));
  else if(event.id == "basic" )
		hist.executeAction(new UndoRedo("basic"));
    // ... was put here
}

function down(){
  var link = 0;
  el = document.getElementById("filename").value;
  if(el == "test.txt")
  {
  window.location.href = "download.php?link=1";
  }
}


function readFile() {
  el = document.getElementById("filename").value;
  if(el == "test.txt")
  {
  window.location.href = "load.php?read=1";
  }
}

function modifyDefaults(){
  defaultVals["head"] = document.getElementById("hHid").value;
  defaultVals["body"] = document.getElementById("bHid").value;
  defaultVals["larm"] = document.getElementById("lHid").value;
  defaultVals["rarm"]= document.getElementById("rHid").value;
  defaultVals["legs"] = document.getElementById("legHid").value;

  changeCurrentstodef();
  
}

function writeFile(){
  var string = "";
  var string2 = "";
  var res = string.concat(currents["head"],",", currents["larm"],",", currents["rarm"],",", currents["body"],",", currents["legs"]);
  var res2 = string2.concat("save.php?write=1&stuff=", res, "&more=stuff")
  window.location.href = res2;


}

function checkIfmod()
{
  if(document.getElementById("FLAG").value=="1")
  {
    document.getElementById("FLAG").value = "0";
    modifyDefaults();
  }
}

function changeCurrentstobasic(){
  currents["head"]= aPNGs["hbasic"]
  currents["body"] = aPNGs["bbasic"];
  currents["larm"] = aPNGs["lbasic"];
  currents["rarm"]= aPNGs["rbasic"];
  currents["legs"] = aPNGs["legbasic"];

}

function changeCurrentstopirate(){
  currents["head"]= aPNGs["hat"]
  currents["body"] = aPNGs["belt"];
  currents["larm"] = aPNGs["hook"];
  currents["rarm"]= aPNGs["sword"];
  currents["legs"] = aPNGs["boots"];

}
function changeCurrentstolep(){
  currents["head"]= aPNGs["beard"]
  currents["body"] = aPNGs["gshirt"];
  currents["larm"] = aPNGs["gold"];
  currents["rarm"]= aPNGs["sham"];
  currents["legs"] = aPNGs["shoes"];

}

function changeCurrentstodef(){
  currents["head"]= defaultVals["head"];
  currents["body"] = defaultVals["body"];
  currents["larm"] = defaultVals["larm"];
  currents["rarm"]= defaultVals["rarm"];
  currents["legs"] = defaultVals["legs"];

}

