var ghost = 0;
var counter = 0;
var themeCounter = 0;
var tableCounter = 0;
var numCounter = 0;
var randomInput = Math.floor(Math.random() * (6 - 1) + 1)
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
    }
    }
    return "";
}
if (getCookie("theme") == "dark"){
    dark()
} if (getCookie("table") == "visible"){
    help()
}
if (randomInput == 1) {
    document.getElementById("input").placeholder = "press . on the numpad to clear your answer!";
} if (randomInput == 2) {
    document.getElementById("input").placeholder = "click the ? at the top right to see a list of Alt Codes!";
 }if (randomInput == 3) {
    document.getElementById("input").placeholder = "you can submit your answer by pressing enter on the keyboard!";
} if (randomInput == 4) {
    document.getElementById("input").placeholder = "Brown Sugar Cinnamon Pop-Tarts are the best.";
} if (randomInput == 5) {
    document.getElementById("input").placeholder = "You will never be assigned the same character twice in a row.";
}
function begin(){
    if (counter == 0) {
        counter = 1;
        start()
    }
}
function start(){
    var random = Math.floor(Math.random() * (17 - 1) + 1);
    if (random == ghost) {
        start()
        console.log("Repeat!")
    } else {
        if (random == 1) {
            document.getElementById("character").innerHTML = "Á";
            return randomresult = 1;
        } if (random == 2) {
            document.getElementById("character").innerHTML = "á";
            return randomresult = 2;
        } if (random == 3) {
            document.getElementById("character").innerHTML = "É";
            return randomresult = 3;
        } if (random == 4) {
            document.getElementById("character").innerHTML = "é";
            return randomresult = 4;
        } if (random == 5) {
            document.getElementById("character").innerHTML = "Í";
            return randomresult = 5;
        } if (random == 6) {
            document.getElementById("character").innerHTML = "í";
            return randomresult = 6;
        } if (random == 7) {
            document.getElementById("character").innerHTML = "Ó";
            return randomresult = 7;
        } if (random == 8) {
            document.getElementById("character").innerHTML = "ó";
            return randomresult = 8;
        } if (random == 9) {
            document.getElementById("character").innerHTML = "Ú";
            return randomresult = 9;
        } if (random == 10) {
            document.getElementById("character").innerHTML = "ú";
            return randomresult = 10;
        } if (random == 11) {
            document.getElementById("character").innerHTML = "Ñ";
            return randomresult = 11;
        } if (random == 12) {
            document.getElementById("character").innerHTML = "ñ";
            return randomresult = 12;
        } if (random == 13) {
            document.getElementById("character").innerHTML = "Ü";
            return randomresult = 13;
        } if (random == 14) {
            document.getElementById("character").innerHTML = "ü";
            return randomresult = 14;
        } if (random == 15) {
            document.getElementById("character").innerHTML = "¡";
            return randomresult = 15;
        } if (random == 16) {
            document.getElementById("character").innerHTML = "¿";
            return randomresult = 16;
        }
    }
}
function check(){
    if (randomresult == 1) {
        if (document.getElementById("input").value === "0193" || document.getElementById("input").value === "Á") { 
            start()
        }
    } if (randomresult == 2){
        if (document.getElementById("input").value === "0225" || document.getElementById("input").value === "á") {
            start()
        }
    } if (randomresult == 3){
        if (document.getElementById("input").value === "0201" || document.getElementById("input").value === "É") {
            start()
        }
    } if (randomresult == 4){
        if (document.getElementById("input").value === "0233" || document.getElementById("input").value === "é") {
            start()
        }
    } if (randomresult == 5){
        if (document.getElementById("input").value === "0205" || document.getElementById("input").value === "Í") {
            start()
        }
    } if (randomresult == 6){
        if (document.getElementById("input").value === "0237" || document.getElementById("input").value === "í") {
            start()
        }
    } if (randomresult == 7){
        if (document.getElementById("input").value === "0211" || document.getElementById("input").value === "Ó") {
            start()
        }
    } if (randomresult == 8){
        if (document.getElementById("input").value === "0243" || document.getElementById("input").value === "ó") {
            start()
        }
    } if (randomresult == 9){
        if (document.getElementById("input").value === "0218" || document.getElementById("input").value === "Ú") {
            start()
        }
    } if (randomresult == 10){
        if (document.getElementById("input").value === "0250" || document.getElementById("input").value === "ú") {
            start()
        }
    } if (randomresult == 11){
        if (document.getElementById("input").value === "0209" || document.getElementById("input").value === "Ñ") {
            start()
        }
     }if (randomresult == 12){
        if (document.getElementById("input").value === "0241" || document.getElementById("input").value === "ñ") {
            start()
        }
    } if (randomresult == 13){
        if (document.getElementById("input").value === "0220" || document.getElementById("input").value === "Ü") {
            start()
        }
    } if (randomresult == 14){
        if (document.getElementById("input").value === "0252" || document.getElementById("input").value === "ü") {
            start()
        }
    } if (randomresult == 15){
        if (document.getElementById("input").value === "0161" || document.getElementById("input").value === "¡") {
            start()
        }
    } if (randomresult == 16){
        if (document.getElementById("input").value === "0191" || document.getElementById("input").value === "¿") {
            start()
        }
    }
    document.getElementById("input").value = "";
    return ghost = randomresult;
}
function dark(){
    if (themeCounter == 0) {
        themeCounter = 1;
        document.body.classList.add("darkTheme")
        document.getElementById("input").classList.add("darkMain")
        document.getElementById("button").classList.add("darkMain")
        document.getElementById("table").classList.add("darkMain")
        document.getElementById("numlock").classList.add("darkNumlock")
        document.cookie = "theme=dark"
        document.getElementById("input").classList.remove("lightMain")
        document.getElementById("button").classList.remove("lightMain")
        document.getElementById("table").classList.remove("lightMain")
        document.getElementById("numlock").classList.remove("lightNumlock")
    } else {
        themeCounter = 0;
        document.body.classList.remove("darkTheme")
        document.getElementById("input").classList.remove("darkMain")
        document.getElementById("button").classList.remove("darkMain")
        document.getElementById("table").classList.remove("darkMain")
        document.getElementById("numlock").classList.remove("darkNumlock")
        document.cookie = "theme=light"
        document.getElementById("input").classList.add("lightMain")
        document.getElementById("button").classList.add("lightMain")
        document.getElementById("table").classList.add("lightMain")
        document.getElementById("numlock").classList.add("lightNumlock")
    }
}
function help(){
    if (tableCounter == 0) {
        tableCounter = 1;
        document.getElementById("table").classList.remove("invisible")
        document.getElementById("table").classList.add("visible")
        document.cookie = "table=visible"
    } else {
        tableCounter = 0;
        document.getElementById("table").classList.remove("visible")
        document.getElementById("table").classList.add("invisible")
        document.cookie = "table=invisible"
    }
}
document.onkeydown = checkKey;
function checkKey(e) {
    if (e.keyCode == '13') {
        check();
    } if (e.keyCode == '110') {
        e.preventDefault();
        document.getElementById("input").value = "";
    } if (e.keyCode == '48' || e.keyCode == '49' || e.keyCode == '50' || e.keyCode == '51' || e.keyCode == '52' || e.keyCode == '53' || e.keyCode == '54' || e.keyCode == '55' || e.keyCode == '56' || e.keyCode == '57') {
        e.preventDefault();
    } 
    
    if (e.getModifierState("NumLock")) {
        if (numCounter == 0){
            document.getElementById("numlock").classList.remove("visible")
        }else {
            document.getElementById("numlock").classList.remove("visible")
            document.getElementById("numlock").classList.add("invisible")
        }
    } else {
        document.getElementById("numlock").classList.remove("invisible")
        document.getElementById("numlock").classList.add("visible")
        return numCounter = 1;
    }
}
window.addEventListener('contextmenu', (event) => {
    event.preventDefault()
});