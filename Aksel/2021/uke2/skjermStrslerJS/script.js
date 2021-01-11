window.onload = oppstart()

function oppstart() {
    testeOmMobil()
}

function testeOmMobil() {
    //Viewports [bredde, høyde]
    const iphoneX = [375, 812]
    const iphone12ProMax = [428, 926] 
    const ipadPro = [1024, 1366]

    if (window.innerWidth <= iphone12ProMax[0] && window.innerHeight <= iphone12ProMax[1]) {
        tekst.innerHTML = "Du er mest sannsynelig på mobil!"
        document.body.style.backgroundColor = "red"
        document.getElementById("img").width = "250"
    }
    else if (window.innerWidth <= ipadPro[0] && window.innerHeight <= ipadPro[1]) {
        tekst.innerHTML = "Du er mest sannsynelig på iPad!"
        document.body.style.backgroundColor = "blue"
        document.getElementById("img").width = "500"
    }
    else {
        tekst.innerHTML = "Du er mest sannsynelig på desktop!" + "<br>Din åpne fane er: " + window.innerWidth + " piksler bred."
        document.body.style.backgroundColor = "green"
        document.getElementById("img").width = "1000"
    }
}