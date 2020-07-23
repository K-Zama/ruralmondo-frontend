"use strict"

// Variables

const usernameLogin = document.querySelector("#username");
const passwordLogin = document.querySelector("#password");
const formLogin = document.querySelector("#formLogin");
const spiner = document.querySelector("#spiner");

spiner.style.display = "none";

// Event Listeners
formLogin.addEventListener("submit", e => {
  e.preventDefault();


  if (usernameLogin.value === "" || passwordLogin.value === "") {
    const error = document.createElement("p");
    error.innerHTML = `Por favor, no dejes ningún apartado sin rellenar`;
    error.classList = "alert alert-danger text-center";
    formLogin.appendChild(error);
    setTimeout(() => {
      error.remove();
    }, 2000)
  } else {
    spiner.style.display = "flex";
    const wellcome = document.createElement("h5");
    wellcome.innerHTML = `¡Coge tu 9 de Airshoft con cañón turcao!`;
    wellcome.classList = "text-center";
    setTimeout(() => {
      spiner.style.display = "none";
      formLogin.appendChild(wellcome);
      setTimeout(() => {
        wellcome.remove();
      }, 3000);
    }, 2000);
  }
});
