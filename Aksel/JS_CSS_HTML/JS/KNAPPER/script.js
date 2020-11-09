//Metode 1
function print() {
    console.log("Clicked knapp3")
    document.body.style.backgroundColor = "red"
}


//Metode 2
//Med document.getElementById("knappNavn").addEventListener("click", funksjon) så henter jeg knappen og legger til en eventListener som "hører" etter et klikk, så når du klikker kjører den funksjonen, altså print2.
document.getElementById("btnKnapp4").addEventListener("click", print2)

function print2() {
    console.log("Clicked knapp4")
    document.body.style.backgroundColor = "blue" //Dette endrer bakgrunnsfargen til blå. 
}


//Metode 3
//Først henter jeg knapp5 fra htmlen og kaller den "btnKnapp5"
const btnKnapp5 = document.querySelector("#btnKnapp5")

//Denne koden betyr at når knapp5 blir trykket kjører den alt inni {}. (Tror det heter en anonym funksjon??)
btnKnapp5.onclick = () => {
    console.log("Clicked knapp5")
    document.body.style.backgroundColor = "green"
}

//Hvordan skrive ut tekst i en div
const btnText = document.querySelector("#btnTxt")
btnText.onclick = () => {
    txtDiv.innerHTML = "Dette er en tekst jeg skrev ut ved bruk av JavaScript."
}
