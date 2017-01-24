/*jslint devel: true */

var HP = 10;
var Fight = 10;
var Mining = 10;
var Craft = 10;
var barWidth = 1;

function start() {
    'use strict';
    document.getElementById("startBtn").style.display = "none";
	document.getElementById("name").style.display = "block";
}

function loadStart() {
    'use strict';
    var name = document.getElementById("nameBox").value,
        adventurersName = document.getElementById("adventurersName"),
        hpStat = document.getElementById("hpStat"),
        fightStat = document.getElementById("fightStat"),
        miningStat = document.getElementById("miningStat"),
        craftStat = document.getElementById("craftStat");
    
    adventurersName.innerHTML = name;
    hpStat.innerHTML = HP;
    fightStat.innerHTML = Fight;
    miningStat.innerHTML = Mining;
    craftStat.innerHTML = Craft;
    
    document.getElementById("name").style.display = "none";
    document.getElementById("initialSetup").style.display = "block";
}

function rest() {
    'use strict';
    document.getElementById("logWindow").innerHTML = "You got some rest.";
    
    var x = document.getElementById("inventory"),
        option = document.createElement("option");
    option.text = "rest";
    x.add(option);
}

function select(value) {
    'use strict';
    var objContent = document.getElementById('detailsWindow');
	if (value === "ore") {
        objContent.innerHTML = "It's ore!";
    } else {
        objContent.innerHTML = "I dunno.";
    }
}

function move() {
    'use strict';
    console.log("barWidth before: " + barWidth);
    var elem = document.getElementById("myBar");
    if (barWidth < 100) {
        barWidth = barWidth + 10;
        elem.style.width = barWidth + '%';
    }
    console.log("barWidth after: " + barWidth);
}


function mine() {
    'use strict';
    document.getElementById("logWindow").innerHTML = "You mine some ore.";
    
    var x = document.getElementById("inventory"),
        option = document.createElement("option");
    option.text = "ore";
    x.add(option);
    
    //Why isn't this working?
    move();
}