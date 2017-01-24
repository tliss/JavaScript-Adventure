/*jslint devel: true */

var HP = 10;
var Fight = 10;
var Mining = 10;
var Craft = 10;

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

function mine() {
    'use strict';
    document.getElementById("logWindow").innerHTML = "You mine some ore.";
    
    var x = document.getElementById("inventory"),
        option = document.createElement("option");
    option.text = "ore";
    x.add(option);
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