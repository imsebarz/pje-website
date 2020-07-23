import jump from "../../node_modules/jump.js/dist/jump.module.js";
const goup = document.querySelector(".arriba");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    goup.style["opacity"] = 1;
    goup.style["visibility"] = "visible";
  } else {
    goup.style["opacity"] = 0;
    goup.style["visibility"] = "hidden";
  }
});

goup.addEventListener("click", () => {
  jump("#header-wrapper");
});
