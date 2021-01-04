//Definisjoner
const inpKort = document.querySelector("#inpKort")
const inpKontanter = document.querySelector("#inpKontanter")
const inpTimer = document.querySelector("#inpTimer")

function regnUt() {
    if ((inpTimer.value == "" ) || inpTimer.value < 0.01 ) { // Sjekker om du har skrevet inn en gyldig verdi
        txtDiv.innerHTML = "Du har ikke skrevet inn en gyldig verdi" //Skriver ut i diven du ikke har skrevet inn en gyldig verdi
    }
    else if (inpTimer.value > 24) { //Sjekker om du har skrevet inn mer enn 24 timer.
      txtDiv.innerHTML = "Du kan ikke stå mer enn 24 timer" //Skriver ut i diven at du ikke kan stå mer enn i 24 timer
    }
    else { //Hvis du har skrevet inn noe
    var verdi = 0
      if (document.getElementById('inpKort').checked) { //Sjekker om du har valgt kort
        verdi = document.getElementById("inpKort").value //Henter verdien til kort, altså 10
      }
      else if (document.getElementById('inpKontanter').checked) { //Sjekker om du har valgt kontanter
        verdi = document.getElementById("inpKontanter").value //Henter verdien til kontanter, altså 12

      }
    
      var timer = inpTimer.value //Henter hvor mange timer du har skrevet inn i input feltet
      var pris = timer * verdi //Regner ut prisen basert på hvor mange timer du skal stå og om du bruker kort eller kontant
      var utenMVA = pris*0.75 //Regner ut prisen uten MVA
      var uMVA = utenMVA.toFixed(2) //Enderer utenMVA prisen til kun to desimaler
      var MVA = pris*0.25 //Regner ut MVA
      var fixMVA = MVA.toFixed(2) //Endrer MVA prisen til kun to desimaler
      var totalPris = utenMVA + MVA //Regner ut total prisen
      var sum = totalPris.toFixed(2) //Endrer total prisen til to desimaler.
      var ferdigSum = 0 //Definerer ferdigSum så jeg kan bruke den senere

      if (inpKontanter.checked) { //Sjekker om kontanter er valgt
      ferdigSum = (Math.ceil(Number(totalPris))) //Hvis kontanter er valgt runder den summen opp til nærmeste heltall
    }
    else {
      ferdigSum = sum //Hvis kontanter ikke er valgt forblir summen det samme
    }
      txtDiv.innerHTML = "Uten MVA: " + uMVA + "kr" + "<br>" + "MVA: " + fixMVA + "kr" + "<br>" +"Totalpris: " + ferdigSum + "kr" //Skriver ut alt i diven
    }
}

