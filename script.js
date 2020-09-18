const tl = gsap.timeline({
  defaults: {
    ease: "power1.out",
  },
});

tl.to(".text", {
  y: "0%",
  duration: 1,
  stagger: 0.25,
});

tl.to(".slider", {
  y: "-100%",
  duration: 1.5,
  delay: 0.5,
});

tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.5");

tl.fromTo(
  ".left-animated",
  { opacity: 0, translateX: "-50%" },
  { opacity: 1, translateX: "0%", duration: 1, stagger: 0.25 }
);

tl.fromTo(
  ".right",
  { opacity: 0, translateY: "-10%" },
  { opacity: 1, translateY: "0%", duration: 1.5 }
);

tl.fromTo(
  ".up-animated",
  { opacity: 0, translateY: "50%" },
  { opacity: 1, translateY: "0%", duration: 1 },
  "-=1.5"
);
