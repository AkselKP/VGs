//Her finner jeg overskrift-elementet
const overskrift = document.querySelector("#overskrift");
//Her endrer jeg overskriften
//overskrift.innerHTML = "Endret overskrift med javascript"; 

//Her finner jeg input-elementet
const minFarge = document.querySelector("#minFarge");
//Her endrer jeg minFarge
minFarge.oninput = () => {
    document.body.style.backgroundColor =  minFarge.value; //Dette endrer til fargen jeg skriver inn i input feltet
    overskrift.innerHTML = minFarge.value; //Dette endrer overskriften til det du skriver inn 
}