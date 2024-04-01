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
