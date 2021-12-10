/* display the window width on resize */
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