/*jslint devel: true */

var HP = 10;
var Fight = 10;
var Mining = 10;
var Craft = 10;
var barWidth = 1;
var currentLevel = 1;
var currentXP = 0;

function start() {
    'use strict';
    document.getElementById("startBtn").style.display = "none";
	document.getElementById("name").style.display = "block";
}

function loadStart() {
    'use strict';
    var name = document.getElementById("nameBox").value,
        adventurersName = document.getElementById("adventurersName"),
        currentLevel = document.getElementById("level"),
        hpStat = document.getElementById("hpStat"),
        fightStat = document.getElementById("fightStat"),
        miningStat = document.getElementById("miningStat"),
        craftStat = document.getElementById("craftStat");
    
    adventurersName.innerHTML = name;
    currentLevel.innerHTML = currentLevel;
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

function gainXP(xp) {
    'use strict';
    currentXP += xp;
    
    var elem = document.getElementById("myBar"),
        xpToLvlUp = 100 * (currentLevel / 2),
        percentage = (currentXP / xpToLvlUp) * 100,
        playersLevel = document.getElementById("level");

    elem.style.width = (percentage) + '%';
    
    if (percentage >= 100) {
        percentage -= 100;
        elem.style.width = percentage + '%';
        currentLevel += 1;
        currentXP = 0;
        playersLevel.innerHTML = currentLevel;
    }
}


function mine() {
    'use strict';
    document.getElementById("logWindow").innerHTML = "You mine some ore.";
    
    var x = document.getElementById("inventory"),
        option = document.createElement("option");
    option.text = "ore";
    x.add(option);
    
    gainXP(10);
}