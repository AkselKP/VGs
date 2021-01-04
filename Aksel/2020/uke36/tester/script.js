/*var passord = document.getElementById("passord").value;
const riktigPassord = "Passord";

function regnUt(){
    if (passord = riktigpassord) {
    console.log("Passordet er riktig");
    }
    else {
        console.log("Passordet er feil, du har ikke tilgang til siden.");
    }
}  */

var tall1 = 5;
var tall2 = 4;

if(tall1 >= tall2) {
    console.log("Tall1 er større enn tall2");
}
else {
    console.log("Tall2 er størst");
 }

 tall3 = 10;
 tall4 = 10;

 if (tall3 == tall4) {
     console.log("Tall3 og tall4 er like store");
 }

var ukedager = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];
var dag = 0; // new Date().getDay();

switch (dag)
{
case 0:
  x = "mandag";
  break;
case 1:
  x = "tirsdag";
  break;
case 2:
  x = "onsdag";
  break;
case 3:
  x = "torsdag";
  break;
case 4:
  x = "fredag";
  break;
case 5:
  x = "lørdag";
  break;
case 6:
  x = "søndag";
  break;

// Standardverdi hvis ingen av valgene over slår til
default:
  x = "Verdien er ikke en gyldig ukedag";
} 
// Skriver ut hvilken dag det er.
console.log(`I dag er det ${x}`); 


