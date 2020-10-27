
// Printer ut "Hello world" i konsollen
console.log("Hello world!")

//Skriver ut "Hello world!" på siden
document.writeln("Hello world!");

function click() {
console.log("Du klikket på meg 2!");
}

//Sjekker om du har klikket på siden
document.onclick = () =>  { // måte å skrive funksjoner på
     console.log("Du klikket på meg!"); // Skrives ut i konsollen
}

document.onclick = () => {
    document.body.style.backgroundColor = "red";
}

