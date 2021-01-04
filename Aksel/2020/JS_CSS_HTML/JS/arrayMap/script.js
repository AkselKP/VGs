/*var tallene = [2, 4, 9];

var treGangeren = tallene.map(tall => tall * 3);

console.log(treGangeren); */

const filmer = [
    {tittel: "Livet er herlig", imdb: "tt0118799"},
    {tittel: "Byens Lys", imdb: "tt0021749"},
    {tittel: "Dr. Strangelove", imdb: "tt0057012"},
    {tittel: "Psycho", imdb: "tt0054215"},
    {tittel: "Ondskapens hotell", imdb: "tt0081505"},
    {tittel: "Eksorsisten", imdb: "tt0070047"},
    {tittel: "Se opp", imdb: "tt1049413"},
    {tittel: "Oppdrag Nemo", imdb: "tt0266543"}
];

const mineFilmer = document.getElementById("mineFilmer");

var lenker = filmer.map(
    film => `<li><a href="http://www.imdb.com/title/${film.imdb}">${film.tittel}</a></li>`
);

for (var lenke of lenker) {
    mineFilmer.innerHTML += lenke;
}