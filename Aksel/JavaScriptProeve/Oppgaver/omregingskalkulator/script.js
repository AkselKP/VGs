//Definerer
const inpVekt = document.querySelector("#inpVekt")
const btnRegnUt = document.querySelector("#btnRegnUt")
const inpStille = document.querySelector("#inpStille")
const inpTur = document.querySelector("#inpTur")

//Funkjonen

btnRegnUt.onclick = () => {
    //Dersom du ikke har skrevet inn noe
    if (inpVekt.value == "") { 
        txtDiv.innerHTML = "Du har ikke skrevet inn en vekt"
    }
    else { //Hvis du har skrevet inn noe
    var PAL = 0;
      if (document.getElementById('inpStille').checked) {
        PAL = document.getElementById("inpStille").value;
      }
      else if (document.getElementById('inpTur').checked) {
        PAL = document.getElementById("inpTur").value;
      }

    
    var vekt = inpVekt.value //Henter det du skrev inn i input feltet
    var BMR = Number(35.27 + (0.558*vekt)) //BMR formelen
    var b = BMR.toFixed(2) // Endrer tallet til kun 2 desimaler
    var eForbruk = BMR * PAL
    var e = eForbruk.toFixed(2)
    txtDiv.innerHTML = "Din BMR er: " + b + "<br>" + "Ditt energiforbruk er: " + e //Skriver ut i diven
    console.log(BMR)
    console.log(eForbruk)
    }
 
}



