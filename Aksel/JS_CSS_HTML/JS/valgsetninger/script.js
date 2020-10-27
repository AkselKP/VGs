//Ett bestemt passord som bruker må oppgi
const passord = "banan";

//Det passordet brukern oppgir
var inputFraBruker = "eple"; //Du kan erstatte "eple" med prompt("Hva er passordet"); da vil en liten boks poppe opp på hjemmesiden hvor du kan skrive inn passordet

//Valgsetning som sjekker om brukeren har skrevet riktig passord
if (inputFraBruker === passord) {
    console.log("Du har skrevet riktig passord");
    document.write("Du har skrevet riktig passord");
}
else { // Dersom passordet er feil vil dette skje istedet
    console.log("Du har skrevet feil passord");
    document.writeln("Du har skrevet feil passord");
}