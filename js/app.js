"use strict"

/* 
    Pintar la alineación cuando estén escogidos los jugadores
    Poner el presupuesto y que se vayan restando y sumando si queremos otros jugadores;
    No dejar que nadie se pase de 0 euros en el presupuesto
*/



// Variables
const playerList = document.querySelector("#playerList");
const players = document.querySelectorAll("#player");
const btnPlayers = document.querySelector("#btn-players");


// JSON de prueba
class Player {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
};

const camacho = new Player("Camacho", 5);

const josefe = new Player("Josefe", 2);


// Pintar en los huecos en el HTML
player[0].setAttribute("data-price", 5);
player[1].setAttribute("data-price", 2);

players[0].innerHTML = `${camacho.name} <span class="badge badge-primary badge-pill" id="playerPrice">${camacho.cost}€</span>`;
players[1].innerHTML = `${josefe.name} <span class="badge badge-primary badge-pill" id="playerPrice">${josefe.cost}€</span>`;


const budgetUser = document.querySelector("#presupuesto");
budgetUser.innerHTML = `${9}€`

budgetUser.setAttribute("data-budget", 9);


// Añadir y restar presupuesto
for (let player of players) {
    player.addEventListener("click", function(e) {
        player.classList.toggle("active");

        let result;
        if (player.classList.contains("active")) {
            result = budgetUser.dataset.budget - this.dataset.price;
        } else {
            result += this.dataset.price;
        };
        budgetUser.innerHTML = `${result}€`;
    });
};