"use strict"

/* 
    Hacer dos objetos JSON para probar la interfaz
    poder elegir los objetos en el list y que cambie la clase de uno a otro la clase active
    Pintar la alineación cuando estén escogidos los jugadores
    Poner el presupuesto y que se vayan restando de los jugadores escogidos 
*/



// Variables
const playerList = document.querySelector("#playerList");
const players = document.querySelectorAll("#player");
const playerPrice = document.querySelector("#playerPrice");
const btnPlayers = document.querySelector("#btn-players")

// JSON
class Player {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

const camacho = new Player("Camacho", 5);

const josefe = new Player("Josefe", 2);


function addPlayer(e) {
    e.preventDefault();

    for (let player of players) {
        player.addEventListener("click", e => {
            console.log("funciona");
        })
    }
}