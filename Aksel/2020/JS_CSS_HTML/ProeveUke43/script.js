//*Proeve uke 43

//Oppgave 1
var btnTekst = document.getElementById("btnTekst");

btnTekst.onclick = () => { 
    console.log("Lag en hjemmeside med en knapp. Når du trykker på knappen skal det skrives en kort tekst i console.")
};

//Oppgave 2
var btnTregangen = document.getElementById("btnTregangen");

btnTregangen.onclick = () => { 
    for (var i=3; i<=21; i=i+3) {
        console.log(i);
    }
}; 

//Oppgave 3
var btnUtregning = document.getElementById("btnUtregning");

var tall1 = Math.floor( Math.random() * 10); 
var tall2 = Math.floor( Math.random() * 10);
var sum;

function regnUt () {
    sum = tall1 * tall2;
    console.log(sum);
}

btnUtregning.onclick = () => {
    regnUt();
    //Oppgave 4
    if (sum > 0) {
    console.log("Svaret er over 0, og regnestykket er ", tall1, "*", tall2);
   document.writeln("Svaret er over 0, og regnestykket er ", tall1, "*", tall2);
    }
    //Oppgave 5
    else if (sum < 0) {
    console.log("Summen er et minustall, regnestykket er ", tall1, "*", tall2);
    document.writeln("Summen er et minustall, regnestykket er ", tall1, "*", tall2);
    }
}

//Oppgave 6
var btnPyramide = document.getElementById("btnPyramide");

btnPyramide.onclick = () => {
    document.writeln("<br>");
    document.writeln("Skrevet ut med to loekker");
    document.writeln("<br>");
    for (var i=6; i>0; i=i-1) {
        for (var j=i; j>0; j=j-1) {
            document.writeln("@");
        }
        document.writeln("<br>");
    }
           
    //Repeat kode som skriver ut mønsteret 
    document.writeln("<br>");
    document.writeln("Skrevet ut med repeat");
    document.writeln("<br>");
    for(var i=6; i>0; i--){
        document.writeln("@".repeat(i));
        document.writeln("<br>");
    } 

    //Kode som også funker
    document.writeln("<br>");
    document.writeln("Skrevet ut med valgsetninger");
    document.writeln("<br>");
    for(var i=0; i<6; i=i+1){
        if (i==0) {
        for(var j=0; j<6; j=j+1) {
            document.writeln("@");
        }
    }
    else if (i==1) {
        for(var j=0; j<5; j=j+1) {
            document.writeln("@");
        }
    }
    else if (i==2) {
        for(var j=0; j<4; j=j+1) {
            document.writeln("@");
        }
    }
    else if (i==3) {
        for(var j=0; j<3; j=j+1) {
            document.writeln("@");
        }
    }
    else if (i==4) {
        for(var j=0; j<2; j=j+1) {
            document.writeln("@");
        }
    }
    else if (i==5) {
        for(var j=0; j<1; j=j+1) {
            document.writeln("@");
        }
    }
        document.writeln("<br>");
    }  
} 



