const divRegnestykke = document.getElementById("divRegnestykke");
const txtPoeng = document.getElementById("txtPoeng");
const txtHighscore = document.getElementById("txtHighscore");
const inpSvar = document.getElementById("inpSvar");
const btnPlay = document.querySelector("#btnPlay");

var fart = 1;
var poeng = -1;
var fasit = 14;
var highscore = 0;
var spilletErOver = false;

if (localStorage.highscore) {
    highscore = localStorage.highscore;
}

txtHighscore.innerHTML = highscore;


const keyframes = [
  { top: "0rem" },  
  { top: "21rem" }
];

const settings = {
  duration: 8000,
  easing: "linear",
  fill: "forwards"  
};

const animasjon = divRegnestykke.animate(keyframes, settings);

const lagRegnestykke = () => {
    if (spilletErOver) {
        return;
    }
    const tall1 = Math.ceil(Math.random() * 10);
    const tall2 = Math.ceil(Math.random() * 10);
    fasit = tall1 * tall2;
    divRegnestykke.innerHTML = `${tall1} * ${tall2}`;
    animasjon.currentTime = 0;
    poeng++;
    fart += 0.1;
    animasjon.playbackRate = fart;
    txtPoeng.innerHTML = poeng;

    if (poeng > highscore) {
      txtHighscore.innerHTML  = poeng;
      txtHighscore.style.color = "yellow"; // endre den så det blir mer og mer yellow ?
      localStorage.highscore = poeng;
}

animasjon.onfinish = () => {
    alert("Du tapte"); // dritt 
    spilletErOver = true;
  }

inpSvar.oninput = () => {
    const svar = Number(inpSvar.value);
    if(svar === fasit) {
      lagRegnestykke();
      inpSvar.value = "";
      }
    }
  }
  
  lagRegnestykke();

  /*btnPlay.onclick = () => { animasjon.play()};  */

