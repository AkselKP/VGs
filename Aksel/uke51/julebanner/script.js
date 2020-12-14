var bilder = [ "<img src='bilder/1.jpg'>", "<img src='bilder/2.jpg'>", "<img src='bilder/3.jpg'>" ]
var tekst = ["", "<p id='del1'>blablablabla 2</p>", "<p id='del2'>Håper du for en god JUL<br> og et godt NYTTÅR</p>"]
const btnMusic = document.querySelector("#btnMusic")
const audio = document.querySelector("audio");

var i = 0
window.onload = oppstart;

function oppstart() {
    document.querySelector("#txtDiv").onclick = neste;
}
var test = document.getElementById("txtDiv");

txtDiv.innerHTML = bilder[0] + tekst[0]
setInterval(neste, 3000);
function neste() {
    if(i == bilder.length -1) {
        i = 0;
    }
        else {
            i++
    }
    test.className += "fade-in"
    txtDiv.innerHTML = bilder[i] + tekst[i]
}

//Musikk 
btnMusic.onclick = () => {
    if (audio.paused) {
      audio.volume = 0.2;
      audio.play();    
    } else {
      audio.pause();
    }
}

 


