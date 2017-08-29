var HP = 10;
var Fight = 10;
var Mining = 10;
var Craft = 10;
var level = 1;
var currentXP = 0;

function start() {
    document.getElementById("startBtn").style.display = "none";
	document.getElementById("name").style.display = "block";
}

function loadStart() {
    var name = document.getElementById("nameBox").value,
        adventurersName = document.getElementById("adventurersName"),
        currentLevel = document.getElementById("level"),
        hpStat = document.getElementById("hpStat"),
        fightStat = document.getElementById("fightStat"),
        miningStat = document.getElementById("miningStat"),
        craftStat = document.getElementById("craftStat");
    
    adventurersName.innerHTML = name;
    currentLevel.innerHTML = level;
    hpStat.innerHTML = HP;
    fightStat.innerHTML = Fight;
    miningStat.innerHTML = Mining;
    craftStat.innerHTML = Craft;
    
    document.getElementById("name").style.display = "none";
    document.getElementById("initialSetup").style.display = "block";
}

function rest() {
    document.getElementById("logWindow").innerHTML = "You got some rest.";
	getItem("rest");
}

function select(value) {
    var objContent = document.getElementById('detailsWindow');
	if (value === "copper") {
        objContent.innerHTML = "It's some copper ore!";
    } else if (value === "silver") {
        objContent.innerHTML = "It's some silver ore!";
    } else if (value === "stone") {
        objContent.innerHTML = "It's some stone!";
    } else if (value === "fish") {
        objContent.innerHTML = "It's a wiggly fish!";
    } else if (value === "rabbit") {
        objContent.innerHTML = "It's a hoppy rabbit!";
	} else if (value === "deer") {
        objContent.innerHTML = "It's a noble deer!";
    } else {
	    objContent.innerHTML = "I dunno.";
    }
}

function gainXP(xp) {
    currentXP += xp;
    
    var elem = document.getElementById("myBar"),
        xpToLvlUp = 100 * (level / 2),
        percentage = (currentXP / xpToLvlUp) * 100,
        playersLevel = document.getElementById("level");

    elem.style.width = (percentage) + '%';
    
    if (percentage >= 100) {
        percentage -= 100;
        elem.style.width = percentage + '%';
        level += 1;
        currentXP = 0;
        playersLevel.innerHTML = level;
    }
}

function mine() {
    var randNum = Math.floor((Math.random() * 3) + 1); //return number from 1 to 3

    switch (randNum) {
        case 1:
            document.getElementById("logWindow").innerHTML = "You mined some copper and gained 10 XP";
            getItem("copper")
            gainXP(10);
            break;
        case 2:
            document.getElementById("logWindow").innerHTML = "You mined some silver and gained 20 XP";
            getItem("silver")
            gainXP(20);
            break;
        case 3:
            document.getElementById("logWindow").innerHTML = "You mined some rock and gained 5 XP";
            getItem("stone")
            gainXP(5);
            break;
    }
}

function hunt() {
	var randNum = Math.floor((Math.random() * 3) + 1); //return number from 1 to 3
	
	switch (randNum) {
		case 1:
			document.getElementById("logWindow").innerHTML = "You caught a fish and gained 10 XP";
			getItem("fish")
			gainXP(10);
			break;
		case 2:
			document.getElementById("logWindow").innerHTML = "You caught a deer and gained 20 XP";
			getItem("deer")
			gainXP(20);
			break;
		case 3:
			document.getElementById("logWindow").innerHTML = "You caught a rabbit and gained 5 XP";
			getItem("rabbit")
			gainXP(5);
			break;
	}
}

function getItem(itemName) {
	var inventory = document.getElementById("inventory");
	var item = document.createElement("OPTION");
	item.text = itemName;
	inventory.add(item);
}