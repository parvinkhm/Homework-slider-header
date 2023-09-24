"use strict"

let rightIcon = document.querySelector(".slider-area .slider .icons i:nth-child(2)");

let leftIcon = document.querySelector(".slider-area .slider .icons i:nth-child(1)");



function rightSlider() {
    let activeSlider = document.querySelector(".active-slider");
    if (activeSlider.nextElementSibling != null) {
        activeSlider.classList.remove("active-slider");
        activeSlider.nextElementSibling.classList.add("active-slider");
    } else {
        activeSlider.classList.remove("active-slider");
        activeSlider.parentNode.firstElementChild.classList.add("active-slider");
    }
}

rightIcon.addEventListener("click", rightSlider)
leftIcon.addEventListener("click", leftSilder)

function leftSilder() {
    let activeSlider = document.querySelector(".active-slider");
    if (activeSlider.previousElementSibling != null) {
        activeSlider.classList.remove("active-slider");
        activeSlider.previousElementSibling.classList.add("active-slider");
    } else {
        activeSlider.classList.remove("active-slider");
        activeSlider.parentNode.lastElementChild.classList.add("active-slider")
    }
}


