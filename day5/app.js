const burger = document.getElementById("burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", ()=>{
    burger.classList.toggle("open");
    nav.classList.toggle("isopen");
})
window.addEventListener("resize", () =>
{
    if(window.innerWidth > 650){
        burger.classList.remove("open");
        nav.classList.remove("isopen");
    }
})

