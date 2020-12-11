//Input-felt
const inpFornavn = document.querySelector("#inpFornavn")
const inpEtternavn = document.querySelector("#inpEtternavn")
const inpAlder = document.querySelector("#inpAlder")
const inpBdag = document.querySelector("#inpBdag")

//Radiobuttons
const dager30 = document.querySelector("#dager30")
const dager60 = document.querySelector("#dager60")
const dager90 = document.querySelector("#dager90")

//Knapper
const btnBekreft = document.querySelector("#btnBekreft")
const btnNullstill = document.querySelector("#btnNullstill")

//Combobox
//

var e = document.getElementById("combo")
//var strUser = e.options[e.selectedIndex].text

function bok() {
    if (combo.value == "velgBok") {
        bokDiv.innerHTML = "<p id='del1'>Du har ikke valgt en bok</p>"
    }
    else if (combo.value == "bok1") {
        bokDiv.innerHTML = "Du har valgt boken: <p id='del2'>Eleanor Oliphant har det helt fint av Honeyman.</p>"
    }
    else if (combo.value == "bok2") {
        bokDiv.innerHTML = "Du har valgt boken: <p id='del2'>Perlefarmen av Marklund. </p>"
    }
    else if (combo.value == "bok3") {
        bokDiv.innerHTML = "Du har valgt boken: <p id='del2'>Slakteren i Liseleje av Riel.</p>"
    }

    else if (combo.value == "bok4") {
        bokDiv.innerHTML = "Du har valgt boken: <p id='del2'>Slagside av Sævareid. </p>"
    }

    else if (combo.value == "bok5") {
        bokDiv.innerHTML = "Du har valgt boken: <p id='del2'>Peppa Gris. </p>"
    }

    else if (combo.value == "bok6") {
        bokDiv.innerHTML = "Du har valgt boken: <p id='del2'>Amber Spyglass. </p>"
    }

    else if (combo.value == "bok7") {
        bokDiv.innerHTML = "Du har valgt boken: <p id='del2'>Nothern Lights. </p>"
    }
    else if (combo.value == "bok8") {
        bokDiv.innerHTML = "Du har valgt boken: <p id='del2'>Angular 4. </p>"
    }


}


