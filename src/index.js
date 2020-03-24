// styles
import "./styles/style.css";

// scripts
import "./scripts/script.js";

const headerSquarePic = document.querySelector('.header__square-pic');

document.addEventListener('scroll', function () {
    console.log(window.pageXOffset);
    headerSquarePic.style.left = -window.pageYOffset*2+"px";
})

