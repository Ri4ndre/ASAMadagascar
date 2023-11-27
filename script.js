window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    var logoText = document.querySelector(".logo-text");
    header.classList.toggle("sticky", window.scrollY > 0);
    logoText.classList.toggle("show", window.scrollY > 0);
});

const body = document.body;
const YTPO = document.querySelector(".youtube-overlay");
const YTButton = document.querySelector(".button");
const YTPopup = document.querySelector(".youtube-popup");

YTButton.addEventListener("click", () => {
    YTPO.classList.add("active");
    body.classList.add("active");
    YTPopup.style.transition = "all 0.4s cubic-bezier(0.17, 0.84, 0.44, 1.01)"; // Add transition property with cubic-bezier timing function
});

YTPO.addEventListener("click", (event) => {
    if (event.target === YTPO) {
        YTPO.classList.remove("active");
        body.classList.remove("active");
        YTPopup.style.transition = "all 0.4s cubic-bezier(0.17, 0.84, 0.44, 1.01)"; // Add transition property with cubic-bezier timing function
    }
});
