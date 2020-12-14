var bilder = [ "<img src='bilder/1.jpg'>", "<img src='bilder/2.jpg'>", "<img src='bilder/3.jpg'>" ]
const btnVis = document.querySelector("#btnVis")
const btnTilbake = document.querySelector("#btnTilbake")

var i = 0
window.onload = oppstart;

function oppstart() {
    document.querySelector("#txtDiv").onclick = neste;
}
var test = document.getElementById("txtDiv");



txtDiv.innerHTML = bilder[0]
setInterval(neste, 3000);
function neste() {
    if(i == bilder.length -1) {
        i = 0;
    }
        else {
            i++
    }
    test.className += "fade-in"
    txtDiv.innerHTML = bilder[i]
}


