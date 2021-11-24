const burger = document.getElementsByClassName("burger") [0]
const nav = document.getElementsByClassName("nav--links-container")[0]

burger.addEventListener("click" , () => {
nav.classList.toggle("active");
console.log("clicked");
burger.classList.toggle("active");

})