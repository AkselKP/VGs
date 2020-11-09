const inpLengde = document.querySelector("#inpLengde")
const inpPersoner = document.querySelector("#inpPersoner")

function regnUt() {
  var distanse = inpLengde.value
  var personer = inpPersoner.value

  var Co2PerKm = 150

  var formel = Co2PerKm * distanse / personer
  
  txtDiv.innerHTML = "Dersom det er " + personer + " i bilen, og kjører " + distanse +"km " + "slipper hver person ut " + formel + "gram co2"
}