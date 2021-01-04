const inpLiter = document.querySelector("#inpLiter")
const inpBensin = document.querySelector("#inpBensin")
const inpDiesel = document.querySelector("#inpDiesel")
const btnKalkuler = document.querySelector("#btnKalkuler")
const btnReset = document.querySelector("#btnReset")

btnKalkuler.onclick = () => {
    if ((inpLiter.value == "" ) || inpLiter.value < 0.01 ) { // Sjekker om du har skrevet inn en gyldig verdi
            txtDiv.innerHTML = "Du har ikke skrevet inn en gyldig verdi. Vi tar ikke bensin i retur." //Skriver ut i diven du ikke har skrevet inn en gyldig verdi
    }
    else if (inpLiter.value < 5) {
        txtDiv.innerHTML = "Vi selger ikke så små kvanta drivstoff."
    }
    else if (inpLiter.value > 80) { //Sjekker om du har skrevet inn mer enn 80 liter
        txtDiv.innerHTML = "Tanken er ikke så stor. Du kan ikke kjøpe mer en 80 liter." //Skriver ut i diven at du ikke kan kjøpe mer enn i 80 liter
    }
    else { //Hvis du har skrevet inn noe
        var drivstoff
    if (document.getElementById('inpBensin').checked) { //Sjekker om du har valgt bensin
        drivstoff = document.getElementById("inpBensin").value //Henter verdien til bensin
    }
    else if (document.getElementById('inpDiesel').checked) { //Sjekker om du har valgt diesel
        drivstoff = document.getElementById("inpDiesel").value //Henter verdien til diesel
    }
          
    var liter = inpLiter.value
    var formel = drivstoff * liter
    var utenMVA = formel*0.75 //Regner ut prisen uten MVA
    var uMVA = utenMVA.toFixed(2) //Enderer utenMVA prisen til kun to desimaler
    var MVA = formel*0.25 //Regner ut MVA
    var fixMVA = MVA.toFixed(2) //Endrer MVA prisen til kun to desimaler
    var totalPris = utenMVA + MVA //Regner ut total prisen
    var sum = totalPris.toFixed(2) //Endrer total prisen til to desimaler.
    var ferdigSum = 0 //Definerer ferdigSum så jeg kan bruke den senere

    txtDiv.innerHTML = "Uten MVA: " + uMVA + "kr" + "<br>" + "MVA: " + fixMVA + "kr" + "<br>" +"Totalpris: " + sum + "kr" //Skriver ut alt i diven
    }
}

btnReset.onclick = () => {
    txtDiv.innerHTML = ""
    inpLiter.value = ""
}
