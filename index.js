"use strict";

let mobileMenu = document.querySelector(".mobile-menu");
let popupWrapper = document.querySelector(".popup-wrapper");
let buttonClose = document.querySelector(".button-close");

mobileMenu.addEventListener("click", () => {
  popupWrapper.classList.add("popup-active");
  mobileMenu.classList.remove("menu-active");
});

buttonClose.addEventListener("click", () => {
  popupWrapper.classList.remove("popup-active");
  mobileMenu.classList.add("menu-active");
});
