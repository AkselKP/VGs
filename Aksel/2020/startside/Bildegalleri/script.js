const btnVis = document.querySelector("#btnVis")
const btnTilbake = document.querySelector("#btnTilbake")

var bilder = [ "<img src='bilder/1.jpg'></div>", "<img src='bilder/2.jpg'>", "<img src='bilder/3.jpg'>", "<img src='bilder/4.jpg'>"];

var tekst = ["En blå Nissan Skyline R34, bilde 1", "En grå Toyota Supra, bilde 2", "En liten marrokaner, bilde 3", "En fin rosa Nissan Skyline R34, bilde 4"]
var i = 0
var test = document.getElementById("txtDiv");


txtDiv.innerHTML = bilder[0] + "<br>" + tekst[0];
setInterval(neste, 2000);
function neste() {
    if(i == bilder.length -1) {
        i = 0;
    }
        else {
            i++
    }
 //   test.className += "fade-in";
    txtDiv.innerHTML = bilder[i] + " <br> " + tekst[i];
}

function tilbake() {
    if(i == 0){
        i = bilder.length - 1;
    }
    else {
        i--
    }
    txtDiv.innerHTML = bilder[i] + " <br> " + tekst[i];
}

