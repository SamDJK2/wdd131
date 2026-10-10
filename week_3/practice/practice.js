function toggleMenu(){
    
}
document.querySelector(".menu-btn").addEventListener("click", toggleMenu)

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("header nav");

function toggleMenu() {
    menuBtn.classList.toggle("open");
    nav.classList.toggle("open");
}

menuBtn.addEventListener("click", toggleMenu);