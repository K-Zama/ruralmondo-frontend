"use strict"

/* 
    Hacer dos objetos JSON para probar la interfaz \/
    poder elegir los objetos en el list y que cambie la clase de uno a otro la clase active
    Pintar la alineación cuando estén escogidos los jugadores
    Poner el presupuesto y que se vayan restando de los jugadores escogidos 
*/



// Variables
const playerList = document.querySelector("#playerList");
const players = document.querySelectorAll("#player");
const playerPrice = document.querySelectorAll("#playerPrice");
const btnPlayers = document.querySelector("#btn-players");
let costBudget;


// JSON de prueba
class Player {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

const camacho = new Player("Camacho", 5);

const josefe = new Player("Josefe", 2);


// Pintar en los huecos en el HTML
players[0].innerHTML = `${camacho.name} <span class="badge badge-primary badge-pill" id="playerPrice">${camacho.cost}€</span>`;
players[1].innerHTML = `${josefe.name} <span class="badge badge-primary badge-pill" id="playerPrice">${josefe.cost}€</span>`;
const costPlayersArray = [camacho.cost, josefe.cost];
// Añadir y restar presupuesto
const budgetUser = document.querySelector("#presupuesto");
budgetUser.innerHTML = `${9}€`

const budget = budgetUser.value


// Cambiar clase active
for (let player of players) {
    player.addEventListener("click", e => {
        player.classList.toggle("active");
    })
};