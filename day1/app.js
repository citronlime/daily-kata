let btnOpen = document.getElementById("btn-open");
let btnClose = document.getElementById("btn-close");
let nav = document.getElementById("nav");
let ul = document.querySelector("ul");


btnClose.addEventListener("click", toggleMenu)
btnOpen.addEventListener("click", toggleMenu)
ul.addEventListener("click", unsetActive)

let activeEl;
window.addEventListener("resize", displayNav)
window.addEventListener("click", setFocus);
function toggleMenu(e){
    

   if( e.target.id==='btn-open'){
        btnClose.style.visibility='visible';
        btnOpen.style.visibility='hidden';
        nav.style.visibility='visible';

    }else{
        btnClose.style.visibility='hidden';
        btnOpen.style.visibility='visible';
        nav.style.visibility='hidden';
    }
}
function unsetActive(e){
    activeEl = e.target; //remember previous select
    e.target.classList.add("active");
    ul.firstElementChild.firstElementChild.classList.remove("active"); //remove active from first ul when menu clicked
    activeEl.classList.remove("active");
    //remove active from previous fokus
    
}
/* If window is larger than 550 and the hamburgermenu is closed - display the horizontal menu*/
function displayNav(e){
if(btnOpen.style.visibility==='visible' && window.innerWidth > 550){
nav.style.visibility = 'visible';
}
}


