var btnOppgaver = document.querySelector("#btnOppgaver")

//Oppg 6.2
function opphøy2(tall) {
    return Math.pow(Number(tall), 2)
}

//Oppg 6.3
function faktuelt(tall) {
    for (var i=0; i<tall; i++) {
        tall = i*i
    }
    return Number(tall)
}

btnOppgaver.onclick = () => {
    document.writeln("<h1>Oppgaver</h1>")
    document.writeln("<br>")


    //Oppg 6.2
    document.writeln("<b>Oppave 6.2 - Opphøy i 2</b>")
    document.writeln("<br>")
    document.write(opphøy2(2))
    document.writeln("<br>")
    document.writeln("<br>")


    //Oppg 6.3
    document.writeln("<b>Oppave 6.3 - Beregner fakultet av et tall og returnerer svaret</b>")
    document.writeln("<br>")
    document.write(faktuelt(2))
    document.writeln("<br>")
    document.writeln("<br>")


}

