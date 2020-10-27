//Generer et tall fra 1-10
var tall1 = Math.floor(Math.random() * 10) + 1;
console.log("Det første tallet er ", tall1);
document.writeln("Det første tallet er ", tall1, "<br>"); // "<br>" bytter til neste linje

//Generer et til tall fra 1-10
var tall2 = Math.floor(Math.random() * 10) + 1;
console.log("Det andre tallet er ", tall2);
document.writeln("Det andre tallet er ", tall2, "<br>");

//Valgsetning som sjekker om tall1 er større enn tall2
if (tall1 > tall2) {
    console.log("Tall 1 er størst");
    document.writeln("Tall 1 er størst");
}
else if (tall1 == tall2){ //Hvis tall1 og tall2 er like store
    console.log("Tall 1 og tall 2 er like store");
    document.writeln("Tall 1 og tall 2 er like store");
}
else { //Hvis tall1 er mindre enn tall2
    console.log("Tall 2 er størst");
    document.writeln("Tall 2 er størst");
}