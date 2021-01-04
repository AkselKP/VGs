/*var i = 1;
//skriver ut tallene opp til 10
while (i < 10) {
    console.log(i);
    i++ //Betyr at "i" blir en mer enn den var 
} */

const firkanter = document.querySelector("#firkanter");

var i = 1;

//Går helt til 100
while (i <= 100) {

    //lager 100 firkanter
    const firkant = document.createElement("div");
    firkanter.appendChild(firkant); // legges til i firkanter

    firkant.style.opacity = i / 100; //Lager firkanter som går fra nesten usynlig til helt synlig

    i++ //Betyr at "i" blir en mer enn den var 
}