let get = (element) => document.getElementById(element)
let btnOpen = get("btn-open");
let btnClose = get("btn-close");
let nav = get("theNav");
btnOpen.addEventListener("click", openMenu);
btnClose.addEventListener("click", closeMenu);

function openMenu(){
    nav.style.visibility = 'visible' 
    btnClose.style.visibility='visible'
    btnOpen.style.visibility = 'hidden'
    
   
}
function closeMenu(){
    nav.style.visibility = 'hidden' 
    btnClose.style.visibility='hidden'
    btnOpen.style.visibility = 'visible'
   
}


