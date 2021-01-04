const sky = document.querySelector("#sky");
//detekter scroll
onscroll = () => {
    sky.style.left = scrollY - 350 + "px";
}