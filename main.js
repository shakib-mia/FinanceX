import Lenis from "@studio-freight/lenis";
import "./style.css";

const lenis = new Lenis();
AOS.init({
  once: true,
});

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

$(document).ready(function () {
  // slider for tutorial section
  $("#testimonial .owl-carousel").owlCarousel({
    margin: 20,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },

      768: {
        items: 2,
      },

      1024: {
        items: 3,
      },
    },
  });
});

const handleSlideClick = (id, direction) => {
  document.querySelector(id + ` .owl-${direction}`).click();
};

document
  .getElementById("owl-next")
  .addEventListener("click", () =>
    handleSlideClick("#testimonial-slider", "next")
  );

document
  .getElementById("owl-prev")
  .addEventListener("click", () =>
    handleSlideClick("#testimonial-slider", "prev")
  );

document.getElementById("year").innerText = new Date().getFullYear();
