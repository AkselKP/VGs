const handleliste = document.querySelector("#handleliste");
const txtSum = document.querySelector("#txtSum");

//Traversere et array - Gå gjennom alle elemente i arrayen

const kaviar = {
    varenavn: "Mills Kaviar",
    pris: 28
};

const gulost = {
    varenavn: "Tine Norvegia",
    pris: 49
}

const prim = {
    varenavn: "Kavli Prim",
    pris: 26
};

//Dette er en liste. En liste kan også skrives nedover
const varer = [kaviar, gulost, prim];
var sum = 0;

//For eksempel vise fram alle varene våre
for(const vare of varer) {
    //1 metode for å finne produktet
    sum += vare.pris;
    handleliste.innerHTML += `
    <li>
        ${vare.varenavn} a kr. ${vare.pris.toFixed(2)}
    </li>
    `;

    //2 metode 
    //handleliste.innerHTML += "<li>" + vare + "</li>";
} 

txtSum.innerHTML = `Sum: ${sum} kroner`;
