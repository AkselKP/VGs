const btnVis = document.querySelector("#btnVis")
const btnTilbake = document.querySelector("#btnTilbake")

var bokstav = [ "A", "B", "C", "D", "E", "F", "G" ]
var i = 0

txtDiv.innerHTML = bokstav[0] + ""

function neste() {
    console.log(bokstav[i]);
    if(i == bokstav.length -1) {
        i = 0;
    }
        else {
            i++
    }
    txtDiv.innerHTML = bokstav[i] + ""
}

function tilbake() {
    console.log(bokstav[i]);
    if(i == 0){
        i = bokstav.length - 1;
    }
    else {
        i--
    }
    txtDiv.innerHTML = bokstav[i] + ""
}

