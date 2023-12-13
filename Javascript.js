let text = "";

for (let i = 1; i < 11; i++) {

    text += "<br>" + i + " x 10 = " + (i * 10) + "<br>";
    
}

document.getElementById("tafel").innerHTML = text;