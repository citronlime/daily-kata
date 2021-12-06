let widthBox = document.getElementById('window-width');
var onresize = function() {
 
   widthBox.textContent = document.body.clientWidth;
   console.log(document.body.clientWidth);
   widthBox.classList.add('display-width');
   setTimeout(() => {
    widthBox.classList.remove('display-width');
   }, 2000)
}
window.addEventListener("resize", onresize);

const nav = document.querySelector(".main-nav");
const burger=document.querySelector(".burger");
burger.addEventListener("click", () => {
   nav.classList.toggle("active");
   burger.classList.toggle("inactive");
})
const close = document.querySelector(".close");
close.addEventListener("click", () => {
   nav.classList.toggle("active");
   burger.classList.remove("inactive");

})

