let menu = document.getElementById("humberger");
let container = document.querySelector(".about-nav-links");
let link = document.querySelector(".about-links");
let icon = document.getElementById("menu-icon");

icon.addEventListener("click", ()=>{
    link.classList.toggle("links1");
    container.style.display="flex";
    link.style.display="flex";
    //link.classList.add("links1")
    if (link.classList.contains("links1")) {
        icon.src = "img/x.svg"; 
    } else {
        icon.src = "img/menu-svgrepo-com.svg";
        link.style.display="none";
    }
});