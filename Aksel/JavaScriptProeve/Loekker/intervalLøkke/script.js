const firkanter = document.querySelector("#firkanter");

var i = 1;



const lagFirkant = () => {
    //lager 100 firkanter
    if (i === 101) {
        return;
    }
    const firkant = document.createElement("div");
    firkanter.appendChild(firkant); // legges til i firkanter

    //firkant.style.transform = "scale(" +i/20 + ")"; //Gjør firkantene større og større
    firkant.style.opacity = i / 100; //Lager firkanter som går fra nesten usynlig til helt synlig
    i++;
}

setInterval(lagFirkant, 100);