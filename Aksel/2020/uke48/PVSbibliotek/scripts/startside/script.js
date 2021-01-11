function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  const btnOmMeg = document.querySelector("#btnOmMeg")

  btnOmMeg.onclick = () => {
    window.location = "omOss.html#omMeg"
  }