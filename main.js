import "./style.css";

fetch("./index.html")
  .then((res) => res.text())
  .then(
    (htmlContent) => (document.querySelector("#app").innerHTML = htmlContent)
  );

// function toggleNavbar() {
//   var navbarMenu = document.querySelector(".navbar-menu");
//   navbarMenu.style.display =
//     navbarMenu.style.display === "flex" ? "none" : "flex";
// }
