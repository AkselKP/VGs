//Dette er en funksjon som skriver ut "Dette er en tekst"
function skrivTekst() {
    console.log("Dette er en tekst");
}
//Her kaller du funksjonen, altså kjører den. Dersom du ikke kaller funksjonen din vil den ikke funke.
skrivTekst(); 

//Du kan også gjøre det på denne måten
function skrivTekst2(tekst) {
    console.log(tekst); // det som blir skrivd inni parentense når du kaller funksjonen blir skrivd ut
}
//Kaller funksjonen
skrivTekst2("Dette er en tekst 2");

document.onclick = skrivTekst; //Teksten blir skrevet ut hver gang jeg trykker på siden