"use strict";

VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 30,
  speed: 600,
  scale: 1,
  transition: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  perspective: 600,
  glare: true
});