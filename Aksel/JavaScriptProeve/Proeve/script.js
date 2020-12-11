//Definisjoner
const inpNavn = document.querySelector("#inpNavn")
const inpDato = document.querySelector("#inpDato")
const btnOk = document.querySelector("#btnOk")

btnOk.onclick = () => {

    //Oppgave 1
    console.log("Hei på deg", inpNavn.value) //Skriver ut i konsollen
    txtOppg1.innerHTML = "Hei på deg " + inpNavn.value //Skriver ut i diven

    //Oppgave 2
    var dato = inpDato.value //Henter inn verdien du skrev inn i input feltet, altså datoen
    var formel = 24-dato //Formelen jeg bruker for å finne hvor mange dager det er til jul
    txtOppg2.innerHTML = "Det er " + formel + " dager til jul" //Skriver ut i diven

   
    if (dato == 24) { //Det er julaften
        txtOppg2.innerHTML = "<h3>God jul!</h3>" //Skriver ut i diven
    }
    else if (dato > 31 || dato < 1) { //Sjekker om du har skrevet et tall over 31 eller minder enn 1. Mulingens litt dumt at man kan skrive inn desimaltall?
        txtOppg2.innerHTML = "Du har ikke skrevet inn en gyldig dato" //Skriver ut i diven
    }
    else  if (dato > 24) { //Julaften har vært. Må fjerne -
        txtOppg2.innerHTML = "Jul var " + formel + " dager siden" //Skriver ut i diven
    }

    //Oppgave 3
    var faenskap = 0
    for(var i=dato; i<=24; i++){ //En løkke som teller fra datoen du oppgir til 24, altså julaften.
        console.log(i) //Skriver ut i konsollen
        faenskap = "" + i + " - " //!Funker ikke
    }
    txtOppg3.innerHTML = faenskap //!Faenskap
} 
