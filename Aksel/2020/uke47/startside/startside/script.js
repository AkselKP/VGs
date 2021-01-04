const button = document.querySelector("#btnMusic");
const icon = document.querySelector("#button > i");
const audio = document.querySelector("audio");

btnMusic.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();    
  } else {
    audio.pause();
  }
});