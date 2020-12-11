    //Definerer
    const inpLiter = document.querySelector("#inpLiter");
    const inpGrader = document.querySelector("#inpGrader");
    const txtGrader = document.querySelector("#txtGrader");
    const txtSvar = document.querySelector("#txtSvar");

const regnUt = () => {
    //Henter det du skrev inn
    const liter = Number(inpLiter.value);
    const fahrenheit = Number(inpGrader.value);

    //Regner ut svaret
    var svar;
    svar = liter * 10;
    txtSvar.innerHTML = svar + " dl";

    var grader;
    grader = fahrenheit - 32; //Starten på fahrenheit-celsius formelen
    sum = grader/1.8; //Slutten på fahrenheit-celsius formelen 
    var forkortet = sum.toFixed(2); //Forkorter tallet til 2 desimaler
    txtGrader.innerHTML = forkortet + " celsius";
}


//Gjør at regnestykket regnes ut når du skriver noe i feltet
inpLiter.oninput = regnUt;
inpGrader.oninput = regnUt;