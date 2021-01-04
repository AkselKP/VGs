const handleliste = document.querySelector("#handleliste");
const inpVare = document.querySelector("#inpVare");

//Metode 1 - Lett
/*const btnReset = document.querySelector("#btnReset");

inpVare.onchange = () => {
    
    handleliste.innerHTML += `
    <li> ${inpVare.value} </li>
`;
inpVare.value = "";
} */
//btnReset.onclick = () => {handleliste.innerHTML -= `<li></li>`}

//Metode 2 - Avansert
const varer = [];

const visVarer = () => {
    handleliste.innerHTML = ""; //Nuller ut handlelisten
    for (const vare of varer) {
        handleliste.innerHTML += `
        <li> ${vare} </li>
    `;
    }
}

inpVare.onchange = () => {
    varer.push(inpVare.value); //Dette legger til nye varer i arrayen/lista
    visVarer();

    inpVare.value = "";
}


 
 