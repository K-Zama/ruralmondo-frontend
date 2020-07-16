"use strict"

// Variables

const usernameLogin = document.querySelector("#username");
const passwordLogin = document.querySelector("#password");
const formularioLogin = document.querySelector("#formularioLogin");
const spiner = document.querySelector("#spiner");

spiner.style.display = "none";

// Event Listeners
formularioLogin.addEventListener("submit", e => {
    e.preventDefault();


    if (usernameLogin.value === "" || passwordLogin.value === "") {
        const error = document.createElement("p");
        error.innerHTML = `Por favor, no dejes ningún apartado sin rellenar`;
        error.classList = "alert alert-danger text-center";
        formularioLogin.appendChild(error);
        setTimeout(() => {
            error.remove();
        }, 2000)
    } else {
        spiner.style.display = "flex";
        const bienvenida = document.createElement("h5");
        bienvenida.innerHTML = `¡Coge tu 9 de Airshoft con cañón turcao!`;
        bienvenida.classList = "text-center";
        setTimeout(() => {
            spiner.style.display = "none";
            formularioLogin.appendChild(bienvenida);
            setTimeout(() => {
                bienvenida.remove();
            }, 3000);
        }, 2000);
    }
});