//Film liste
const filmer = [
    {tittel: "Livet er herlig", sjanger: "komedie", minutter: 116},
    {tittel: "Byens Lys", sjanger: "komedie", minutter: 87},
    {tittel: "Dr. Strangelove", sjanger: "komedie", minutter: 95},
    {tittel: "Psycho", sjanger: "skrekk", minutter: 109},
    {tittel: "Ondskapens hotell", sjanger: "skrekk", minutter: 146},
    {tittel: "Eksorsisten", sjanger: "skrekk", minutter: 122},
    {tittel: "Se opp", sjanger: "tegnefilm", minutter: 96},
    {tittel: "Oppdrag Nemo", sjanger: "tegnefilm", minutter: 100}
];

//Metode 1
var komedier = filmer.filter(film => film.sjanger === "komedie");

//Metode 2
/*var komediefilter = function(film) {
    return film.sjanger === "komedie";
}
var komedier = filmer.filter(komediefilter);*/

//Metode 3
/*var komedier = filmer.filter(function(film){
    return film.sjanger === "komedie";
}) */

//Metode 4
/*var komedier = [];
for (var film of filmer) {
    if (film.sjanger === "komedie") {
        komedier.push(film);
    }
} */
 
console.log(komedier);