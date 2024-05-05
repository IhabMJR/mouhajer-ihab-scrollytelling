gsap.registerPlugin(DrawSVGPlugin);

let body = document.body;
let minuteur;
let spirale = document.querySelector(".spirale");
let hauteur = document.body.scrollHeight;

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

/* ---- Animation chapitre 1 ----- */

gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      trigger: "#ch1"
    }
  })
  .fromTo(spirale, { scale: 1, duration: 1 }, { scale: 9, duration: 5 })
  .to(spirale, { opacity: 0.5, duration: 5}, '<')
  .to(".text1", { opacity: 1, duration: 5})
  .to(".text2", { opacity: 1, duration: 5})
  .to(".perso", { opacity: 0, duration: 5 })
  .to(".text1", { opacity: 0, duration: 10})
  .to(".text2", { opacity: 0, duration: 10}, '<'
);

/* ---- Animation chapitre 2 ----- */

gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      trigger: "#ch2"
    }
  })
  .fromTo(".montagne", { transform: "translate(0, 30vw)", duration: 1 }, 
  { transform: "translate(0, 0)", duration: 500 })
  .fromTo(".chaise", { transform: "translate(0, -30vw)", duration: 1 }, 
  { transform: "translate(0, 0)", duration: 100 })
  .to(".perso2", { transform: "translate(0, 0)", duration: 50})
  .to(".text3", { opacity: 1, duration: 50})
  .to(".text4", { opacity: 1, duration: 50}, '<'
);

gsap.to(".nuage1", {
  scrollTrigger: {
    markers: true,
    scrub: true,
    trigger: "#ch2"
  },
  y: hauteur * .14 * -1,
  ease: "none"
});

gsap.to(".nuage2", {
  scrollTrigger: {
    markers: true,
    scrub: true,
    trigger: "#ch2"
  },
  y: hauteur * .18 * -1,
  ease: "none"
});

gsap.to(".nuage3", {
  scrollTrigger: {
    markers: true,
    scrub: true,
    trigger: "#ch2"
  },
  y: hauteur * .16 * -1,
  ease: "none"
});

/* ---- Animation chapitre 3 ----- */

gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      trigger: "#ch3"
    }
  })
  .to(".text5", { opacity: 1, duration: 50})
  .to(".text6", { opacity: 1, duration: 50},
);

/* ---- Animation chapitre 4 ----- */

gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      trigger: "#ch4"
    }
  })
  .to(".text7", { opacity: 1, duration: 200},)
  .to(".visage", { opacity: 1, duration: 100, stagger: 10})
  .to(".text7", { opacity: 0, duration: 200}, '<'
);

/* ---- Animation chapitre 5 ----- */

gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      trigger: "#ch5"
    }
  })
  .to(".perso3", { transform: "translate(0, 40vw)", duration: 1000})
  .to(".perso3", { rotate: "30deg", duration: 500}, '<')
  .to(".calque_1", { opacity: 0, duration: 100})
  .to(".text8", { opacity: 1, duration: 200}
);

/* ---- Animation chapitre 6 ----- */

gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      trigger: "#ch6"
    }
  })
  .to(".text9", { opacity: 1, duration: 200})
  .to(".text10", { opacity: 1, duration: 200},
);
