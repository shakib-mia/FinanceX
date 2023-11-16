import "./style.css";

fetch("./index.html")
  .then((res) => res.text())
  .then(
    (htmlContent) => (document.querySelector("#app").innerHTML = htmlContent)
  );
