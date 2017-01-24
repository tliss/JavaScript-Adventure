/*jslint devel: true */

function start() {
    'use strict';
    document.getElementById("startBtn").style.display = "none";
	document.getElementById("name").style.display = "block";
}

function loadStart() {
    'use strict';
    var name = document.getElementById("nameBox").value,
        adventurersName = document.getElementById('adventurersName');
    document.getElementById("name").style.display = "none";
    document.getElementById("initialSetup").style.display = "block";
    adventurersName.innerHTML = name;
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