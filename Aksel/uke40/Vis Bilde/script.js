var vis = false;
var vis2 = false;
var vis3 = false;

// JS
function bildeEn(){
  if (vis) {
    vis = false; 
    bildeDiv.innerHTML = "Bildene vil vises her";
  }
  else {
    vis = true;
    bildeDiv.innerHTML = "<img src=bilder/scripting.jpeg width=400 height=400> <img src=bilder/js.png width=400 height=400> <img src=bilder/JavaScript.jpg width=400 height=400>";
  }
}

  // HTML
  function bildeTo(){
    if (vis2) {
      vis2 = false; 
      bildeDiv.innerHTML = "Bildene vil vises her";
    }
    else {
      vis2 = true;
    bildeDiv.innerHTML = "<img src=bilder/htmlCode.jpg width=400 height=400> <img src=bilder/html.png width=400 height=400> <img src=bilder/Hjemmeside.jpg width=400 height=400>";
    }
  }

  // CSS
  function bildeTre(){
    if (vis3) {
      vis3 = false; 
      bildeDiv.innerHTML = "Bildene vil vises her";
    }
    else {
      vis3 = true;
    bildeDiv.innerHTML = "<img src=bilder/cssCode.jpeg width=400 height=400> <img src=bilder/css.png width=400 height=400> <img src=bilder/styling.png width=400 height=400>";
    } 
  }
 