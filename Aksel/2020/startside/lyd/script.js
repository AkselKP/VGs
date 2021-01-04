//Dette finner knappene 
const btn10000 = document.querySelector("#btn1000");
const btn15000 = document.querySelector("#btn1500");
const btn20000 = document.querySelector("#btn2000");

const minFrekvens = document.querySelector("#minFrekvens");
const btnVelgSelv = document.querySelector("#btnVelgSelv");

//Dette er spill funksjonen
function spill(frekvens) {
    const ac = new AudioContext();
    const osc = ac.createOscillator();
    osc.connect(ac.destination); //Finner høytallerne

    osc.frequency.value = frekvens;

    osc.start(0); //Spiller i 1 sekund
    osc.stop(1); 
}

//Spiller frekvensen satt når du trykker på knappen
btn10000.onclick = () => { spill(10000) } 
btn15000.onclick = () => { spill(15000) }
btn20000.onclick = () => { spill(20000) }
btnVelgSelv.onclick = () => { spill(minFrekvens.value) }