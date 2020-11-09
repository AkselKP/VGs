//Henter inn data fra nettsida
const inpNavn = document.querySelector("#inpNavn")
const inpAlder = document.querySelector("#inpAlder")
const inpHeight = document.querySelector("#inpHeight")
const inpMann = document.querySelector("#inpMann")
const inpKvinne = document.querySelector("#inpKvinne")
const btnStart = document.querySelector("#btnStart")

btnStart.onclick = () => {
    //Definisjoner
    var navn = inpNavn.value
    var navnLengde = navn.length
    var alder = inpAlder.value
    var height = inpHeight.value
    var magiskVerdi = 0

    //Formler
    var guttFormel = navnLengde*alder-height
    var jenteFormel = (alder*height)-3
    

    if (inpMann.checked) { //Hvis mann er valgt
        magiskVerdi = guttFormel //magiskVerdi = gutt
    }
    else if (inpKvinne.checked) { //Hvis kvinne er valgt
        magiskVerdi = jenteFormel //magiskVerdi = jente
    }

    if (magiskVerdi % 2 == 0) { //Hvis magiskVerdi er partall
        txtDiv.innerHTML = "<h4>Det vil gå deg godt her i verden...</h4> "  + "For at spådommen skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345"
    }
    else {
        txtDiv.innerHTML = "<h5>Stakkars deg! Alt kommer til å gå deg galt... </h5>" + "For at spådommen ikke skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345"

    }
}
