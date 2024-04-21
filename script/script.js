let body = document.body;
let minuteur;

window.addEventListener('scroll', function isScrolling() {
  clearTimeout(minuteur);
  body.classList.add("is-scrolling");
  minuteur = setTimeout(() => {
    body.classList.remove("is-scrolling");
 }, 100);
});

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    ".cta",
    { bottom: "8vw" },
    {
      bottom: "3vw",
      duration: 0.5,
      repeat: -1,
      "transition-timing-function": "linear",
      yoyo: true,
      ease: "expo.in",
    }
  );
});
