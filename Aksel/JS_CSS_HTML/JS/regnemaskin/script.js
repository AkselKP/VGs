//Definerer
const inpTall1 = document.querySelector("#inpTall1");
const inpTall2 = document.querySelector("#inpTall2");
const txtSvar = document.querySelector("#txtSvar");
const valgtRegneart = document.querySelector("#valgtRegneart");

const regnUt = () => {
    //Henter det du skrev inn
    const tall1 = Number(inpTall1.value); 
    const tall2 = Number(inpTall2.value);
    const regneart = valgtRegneart.value;

    
    //Regner ut svaret
    var svar;
    if (regneart === "+") {
        svar = tall1 + tall2;
    } else if (regneart === "-") {
        svar = tall1 - tall2;
    } else if (regneart === "*") {
        svar = Math.round(tall1 * tall2 * 100) / 100;
    } else if (regneart === ":") {
        svar = Math.round(tall1 / tall2 * 100) / 100;
    }
    txtSvar.innerHTML = svar;
}

//Gjør at regnestykket regnes ut når du skriver noe i feltet
inpTall1.oninput = regnUt;
inpTall2.oninput = regnUt;
valgtRegneart.onchange = regnUt;