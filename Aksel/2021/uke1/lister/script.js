var minListe = [2,4,7,7,3,4,8,9,2,1,0,12,1];

function skrivTilConsole() {
    console.log(minListe)
}

function forsteSiste() {
    console.log("Første: ", minListe[0])
    console.log("Siste: ", minListe[12])
}

function leggSammen() {
    var sum = minListe[0] + minListe[12]
    console.log("Første + siste: ", sum)
}

function minMax() {
    var max = Math.max(...minListe)
    var min = Math.min(...minListe)
    console.log("Max: ", max)
    console.log("Min: ", min)
}

function skrivUt() {
    for (var i=0; i<minListe.length; i++) 
    console.log(minListe[i]); 
}

function leggSammen2() {
  var total = 0;
  for (var i in minListe) {
    total += minListe[i]
  }
  console.log("Alt lagt sammen: ", total)

}

function gjennomsnitt() {
    var sum = 0;
    for (var i in minListe) {
      sum += minListe[i]
    }
    var total = sum / minListe.length
    var rundetAv = total.toFixed(2)
    console.log("Gjennomsnitt: ", rundetAv)
}

function sorter() {
    var sortert = minListe.sort(function(a, b){return b + a})
    console.log(sortert)
}

function finnMedian() {
    const sortert = minListe.sort(function(a, b){return b + a})
    const mid = Math.ceil(minListe.length / 2)

    const median = minListe.length % 2 == 0 ? (sortert[mid] + sortert[mid - 1]) / 2 : sortert[mid - 1]
    console.log("Median: ", median)
}

//Endre bakgrunnsfarge cus why not
const btnConsole = document.querySelector("#btnConsole")
const btnForstesiste = document.querySelector("#btnForstesiste")
const btnleggSammen = document.querySelector("#btnleggSammen")
const btnMinMax = document.querySelector("#btnMinMax")
const btnSkrivUt = document.querySelector("#btnSkrivUt")
const btnleggSammen2 = document.querySelector("#btnleggSammen2")
const btnGjennomsnitt = document.querySelector("#btnGjennomsnitt")
const btnSort = document.querySelector("#btnSort")
const btnMedian = document.querySelector("#btnMedian")

btnConsole.onclick= () => {
    document.body.style.backgroundColor = "red"
}

btnForstesiste.onclick= () => {
    document.body.style.backgroundColor = "blue"
}

btnleggSammen.onclick= () => {
    document.body.style.backgroundColor = "green"
}

btnMinMax.onclick= () => {
    document.body.style.backgroundColor = "orange"
}

btnSkrivUt.onclick= () => {
    document.body.style.backgroundColor = "brown"
}

btnleggSammen2.onclick= () => {
    document.body.style.backgroundColor = "gray"
}

btnGjennomsnitt.onclick = () => {
    document.body.style.backgroundColor = "coral"
}

btnSort.onclick = () => {
    document.body.style.backgroundColor = "purple"
}

btnMedian.onclick = () => {
    document.body.style.backgroundColor = "pink"
}


