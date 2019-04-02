var hamburger = document.querySelector("nav div i");
var menu = document.querySelector("nav div:nth-child(3)");

hamburger.addEventListener('click', function() {
    
    menu.classList.toggle('mostrar');

});
