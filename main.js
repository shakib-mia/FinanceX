import Lenis from "@studio-freight/lenis";
import "./style.css";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: false,
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      1024: { slidesPerView: 3, spaceBetween: 20 },
    },
  });
});

// console.log(document.querySelector(".swiper-next"));

const lenis = new Lenis();
AOS.init({
  once: true,
  duration: 1000,
});

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// $(document).ready(function () {
//   $("#clients .owl-carousel").owlCarousel({
//     margin: 20,
//     dots: false,
//     nav: true,
//     autoplay: true,
//     autoplayTimeout: 3000,
//     responsive: {
//       0: {
//         items: 3,
//         loop: true,
//       },

//       768: {
//         items: 3,
//       },

//       1024: {
//         items: 5,
//         loop: false,
//         mouseDrag: false,
//       },
//     },
//   });
//   // slider for tutorial section
//   $("#testimonial .owl-carousel").owlCarousel({
//     margin: 20,
//     dots: false,
//     nav: true,
//     responsive: {
//       0: {
//         items: 1,
//       },

//       768: {
//         items: 2,
//       },

//       1024: {
//         items: 3,
//       },
//     },
//   });
// });

document.getElementById("year").innerText = new Date().getFullYear();

// For navbar

const navbar = document.getElementById("navbar-container");
// const navContent = document.getElementById("nav-content");
navbar.style.position = "fixed";
navbar.style.top = 0;

function createScrollDirectionTracker() {
  let scrollDirection = "up";
  let lastScrollY = 0;

  function handleScroll() {
    const currentScrollY = Lenis.scroll || window.pageYOffset; // Using Lenis scroll

    if (currentScrollY > lastScrollY) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    lastScrollY = currentScrollY;
    // console.log(scrollDirection);
    // Hide navbar on scroll down
    if (scrollDirection === "down") {
      navbar.style.top = "-10rem";
      navbar.style.transition = "all 0.5s ease";
    } else {
      if (currentScrollY > 0) {
        navbar.style.top = "0";
        navbar.style.boxShadow = "0 0 20px 0 #2B245D21";
        navbar.style.backgroundColor = "#2E2E2E";
      } else {
        navbar.style.top = `${0}px`;
        navbar.style.boxShadow = "none";
        navbar.style.transition = "all 0.5s ease";
        navbar.style.backgroundColor = "#2E2E2E00";
      }
    }

    // Box shadow and fixed position on scroll
    if (currentScrollY > 0) {
      // navContent.style.boxShadow = "0 0 20px 0 #2B245D21";
      // navContent.style.position = "fixed";
    } else {
      // navContent.style.boxShadow = "none";
    }
  }

  // Listen to scroll events
  window.addEventListener("scroll", handleScroll);

  return {
    getScrollDirection: () => scrollDirection,
    cleanup: () => {
      window.removeEventListener("scroll", handleScroll);
    },
  };
}

createScrollDirectionTracker();
