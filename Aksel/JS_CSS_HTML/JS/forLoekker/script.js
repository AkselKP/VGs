//Deklarasjon av en for-løkke
// i er variabelen det testes på. i<10 er betingelsen. Løkken vil kjøre så lenge i er lavere enn 10
// i++ øker verdien til i for hver gang løkka kjøres
//* Istedet for i++ kan du også skrive i=i+"valgfritt tall. For eksempel i=i+2, dette vil da legge til 2 for hver gang løkka kjøres*/

for(var i=0; i<10; i++){
    //Kode som gjentas sålenge betingelsen er sann.
    console.log(i);
}

//*Her er noen enkle oppgaver jeg har gjort tidligere, du kan finne vanskligere oppgaver lenger ned
// Oppgave løkker

//Oppg 1
//*Skriver ut 1gangen opp til 100
//?Jeg hra skrevet i<101 for at løkken skal kjøre helt til 100, du kan også skrive i<=100 istedet
/*for(var i=0; i<101; i=i+1){
    console.log(i);
} */

//Oppg 2
//*Skriver ut 2 gangen opp til 100
/*for(var i=0; i<101; i=i+2){
    console.log(i);
} */

//Oppg 3
//*Skriver ut 13gangen opp til 1000
/*for(var i=0; i<1000; i=i+13) {
    console.log(i);
} */


//Oppg 4
//*Skriver ut 3gangen fra 200 til 0
/*for(var i=200; i>0; i=i-3){
    console.log(i);
} */
 

//Oppg 5
//*Skriver ut 15gangen opp til 100
/*for(var i=0; i<100; i=i+15){
    console.log(i);
} */

//Oppg 6
//* Skriver ut 3gangen opp til 100
/*for(var i=0; i<100; i=i+3){
    console.log(i);
} */

//!Vanskligere oppgaver
//Oppg 1
//*Skriver ut alle tall fra 0-100
/*document.writeln("<br>");  
document.writeln("Oppgave 1");
document.writeln("<br>");  

for(var i=0; i<101; i=i+1){
    document.writeln(i);
}  
document.writeln("<br>");  

//Oppg 2
//*Skriver ut alle tall fra 99 til 1
document.writeln("<br>");  
document.writeln("Oppgave 2");
document.writeln("<br>");  

for(var i=100; i>0; i=i-1){
    document.writeln(i);
} 
document.writeln("<br>");  

//Oppg 3
//*Skriver ut tallfølgen 2, 4, 6, 8, 10,..., 96, 98
document.writeln("<br>");  
document.writeln("Oppgave 3");
document.writeln("<br>");  

for(var i=0; i<101; i=i+2){
    document.writeln(i);
} 
document.writeln("<br>");  

//Oppg 4
//*Skriver ut tallfølgen 1, 4, 9, 16, 25,..., 10000
document.writeln("<br>");  
document.writeln("Oppgave 4");
document.writeln("<br>");  

//1 - 4 - 9 - 16 - 25.     1x1 2x2 3x3 4x4 5x5
var tall = 0;
for(var i=1;i<101; i=i+1){ //tallListe[0]
    tall = i*i;
    document.writeln(tall);
}  
document.writeln("<br>");  

//Oppg 4a
//*Skriver ut 5 gangen opptil 100
document.writeln("<br>");  
document.writeln("Oppgave 4a"); 
document.writeln("<br>");  

for(var i=0; i<101; i=i+5){
    document.writeln(i);
} 
document.writeln("<br>");  

//Oppg 4b
//*Skriver ut 5 gangen fra 0 til -100
document.writeln("<br>");  
document.writeln("Oppgave 4b");  
document.writeln("<br>");  

for(var i=0; i>-101; i=i-5){
    document.writeln(i);
} 
document.writeln("<br>");  

//Oppg 4c
//*Skriver ut 5 gangen fra -50 til 50
document.writeln("<br>");  
document.writeln("Oppgave 4c"); 
document.writeln("<br>");  

for(var i=-50; i<51; i=i+5){
    document.writeln(i);
} 
document.writeln("<br>");  

//Oppg 4d
//* Skriver ut alle oddetall fra 0-100
document.writeln("<br>");  
document.writeln("Oppgave 4d");  
document.writeln("<br>");  

for(var i=1; i<101; i=i+1){
    if ((i % 2) !== 0)
    document.writeln(i);
} 
document.writeln("<br>");  

//Oppg 5
//*Skriver ut et mønster, fra 1 * til 9 *.
document.writeln("<br>");  
document.writeln("Oppgave 5");  
document.writeln("<br>");  

for(var i=1; i<9; i++){
    document.writeln("*".repeat(i));
    document.writeln("<br>");  
} 
document.writeln("<br>");  

//Oppg 6
//*Skriver ut en E
document.writeln("Oppgave 6");  
document.writeln("<br>");   
for (var i=0; i<5; i++) {
    if (i==1) {
        for (var j=1; j<=1; j++) {
            document.writeln("*");
        }
    }
    else if (i==2) {
        for (var j=1; j<=3; j++) {
            document.writeln("*");
        }
    }
    else if (i==3) {
        for (var j=1; j<=1; j++) {
            document.writeln("*");
        }
    }
    else {
        for (var j=1; j<=4; j++) {
            document.writeln("*");
        }
    }
    document.writeln("<br>");
}

//Oppg 7
//!Funker ikke
document.writeln("<br>");
document.writeln("Oppgave 7");
document.writeln("<br>");

for (var i=0; i<6; i++) {
    for (var j=0; j<10; j++) {
        document.writeln("-");
    }
    document.writeln("<br>");
} 
*/
    
// if (i==1 && j==3) { }
/*for (var i=0; i<6; i++) {
    for (var j=0; j<10; j++) {
        document.writeln("-");
    }
    document.writeln("<br>");
} */

/*for (var i=0; i<6; i++) {
    if (i==1) {
        for (var j=0; j<2; j++) {
            document.writeln("*");
        }
    }
    else {
        for (var j=0; j<10; j++) {
            document.writeln("-");
        }
    }
    document.writeln("<br>");

}  */







