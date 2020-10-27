//Oppg 1
document.writeln("<br>");
document.writeln("Oppgave 1");
document.writeln("<br>");
//Funksjonen ganger sammen to tall som er
//sendt med som innparameter.
//Resultatet returneres
function gangeToTall(a,b) {
return a * b; // Returnerer a og b verdiene
}
var resultat = gangeToTall(3, 5); // Resultat -> 15
document.writeln(resultat); // Skriver ut 15 i konsollen:
document.writeln("<br>");
document.writeln("Inn- og utparameter skrives inn i funksjonen inne i parentesene, for eksempel<br>function gangeToTall(a,b) {<br> return a * b; <br> } <br> Denne koden ganger to variabler med hverandre.")
document.writeln("<br>");

//Oppg 2
document.writeln("<br>");
document.writeln("Oppgave 2");
document.writeln("<br>");

function arealAvRektangel(a,b) {
    return a * b;
}
document.writeln("Sidene på et rektangel er 4cm og 6cm, arealet av rektangelet er ", arealAvRektangel(4,6));
document.writeln("<br>");

//Oppg 3
document.writeln("<br>");
document.writeln("Oppgave 3");
document.writeln("<br>");

function omkretsAvRektangel(a,b) {
    return a*2 + b*2;
}
document.writeln("Sidene på et rektangel er 4cm og 6cm, omkretsen til rektangelet er ", omkretsAvRektangel(4,6));
document.writeln("<br>");

//Oppg 4
document.writeln("<br>");
document.writeln("Oppgave 4");
document.writeln("<br>");

for (var i=0; i<4; i++) {
    for (var j=0; j<4; j++) {
        document.writeln("@");
    }
    document.writeln("<br>");
}
document.writeln("<br>"); 

//Oppg 5
var bildeBtn = document.getElementById("bildeKnapp");
var divElement = document.getElementById("bildeDiv");

// Lytter på kanppen minBtn
bildeBtn.onclick = skrivUtBilde;

function skrivUtBilde(){
  divElement.innerHTML = "<img src=Porsgrunn.png>";
} 

//Oppg 6 ????
document.writeln("Oppg 6 ??");
document.writeln("<br>");

var sekunder = 9000;
var timer = Math.floor(sekunder / 60 / 60);
var minutter = Math.floor(sekunder / 60) - (timer * 60);
var sekunder2 = sekunder % 60;

var formatted = sekunder + " sekunder er det samme som " + timer +" time(r) " + minutter + " minutt(er) og " + sekunder2 + " sekund(er)";

function sekunderTilTimerOgAnnet(a,b) {
 // hmmm
}
document.writeln(formatted);
