let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");

menu.onclik = () =>{
    menu.classList.toggle("fa-times");
    header.classList.toggle("active");
}