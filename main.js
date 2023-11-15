import "./style.css";

fetch("./index.html")
  .then((res) => res.text())
  .then(
    (htmlContent) => (document.querySelector("#app").innerHTML = htmlContent)
  );

// document.querySelector("#app").innerHTML = `
//   <div class="bg-no-repeat bg-cover" style="background-image: url('./assets/background.svg')">
//     <nav></nav>
//   </div>
// `;
