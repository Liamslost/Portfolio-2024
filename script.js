"use strict"

window.onscroll = function() {navScrollFunction()};

function navScrollFunction() {
    if (document.body.scrollTop >50 || document.documentElement.scrollTop > 50) {
        let nav = document.getElementById("nav")
        nav.style.backgroundColor = "var(--color-navbar-bg)"
    }else {
        let nav = document.getElementById("nav")
        nav.style.backgroundColor = ""
    }
}