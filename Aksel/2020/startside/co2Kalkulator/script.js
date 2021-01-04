const inpLengde = document.querySelector("#inpLengde")
const inpPersoner = document.querySelector("#inpPersoner")
const btnRegn = document.querySelector("#btnRegnUt")

btnRegn.onclick = () => {
  var distanse = inpLengde.value
  var personer = inpPersoner.value

  var Co2PerKm = ["150", "103", "32", "52", "340"]

  var bilFormel = Co2PerKm[0] * distanse / personer
  var bussByFormel = Co2PerKm[1] * distanse / personer
  var togFormel = Co2PerKm[2] * distanse / personer
  var bussLandeveiFormel = Co2PerKm[3] * distanse / personer
  var flyFormel = Co2PerKm[4] * distanse / personer
  
  //Bil
  bil.style.width = Number(bilFormel) / 2+ "px"  
  bil.innerHTML = "Bil: "  + "<b>" + Number(bilFormel) + "gram" + "</b>"

  //Buss i By
  bussBy.style.width =  Number(bussByFormel) / 2 + "px" 
  bussBy.innerHTML = "Buss By: "  + "<b>" + Number(bussByFormel) + "gram" + "</b>"

  //Tog
  tog.style.width = Number(togFormel) / 2 + "px" 
  tog.innerHTML = "Tog: " + "<b>" + Number(togFormel) + "gram" + "</b>"

  //Buss po landevei
  bussLandevei.style.width = Number(bussLandeveiFormel) / 2+ "px"
  bussLandevei.innerHTML = "Buss Landevei: " + "<b>" + Number(bussLandeveiFormel) + "gram" + "</b>"

  //Fly
  fly.style.width =  Number(flyFormel) / 2+ "px"
  fly.innerHTML = "Fly: " + "<b>" + Number(flyFormel) + "gram" + "</b>"
  
}


