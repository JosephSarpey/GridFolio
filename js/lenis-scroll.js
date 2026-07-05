import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let lenis = null;

document.addEventListener("DOMContentLoaded", () => {
  initLenisScroll();
});

// lenis scroll - smooth scroll initialization
function initLenisScroll() {
  const isMobile = window.innerWidth <= 1000;

  lenis = new Lenis({
    duration: isMobile ? 0.75 : 0.9,
    lerp: isMobile ? 0.08 : 0.085,
    smoothWheel: true,
    syncTouch: true,
    touchMultiplier: isMobile ? 1.2 : 1.8,
    wheelMultiplier: 1,
  });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  window.lenis = lenis;
}

export { lenis };
