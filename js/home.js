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
budgetUser.innerHTML = `${9}€`;

budgetUser.setAttribute("data-budget", 9);


// Añadir y restar presupuesto
for (let player of players) {
    player.addEventListener("click", function(e) {
        player.classList.toggle("active");

        if (budgetUser.dataset.budget >= 0) {
            if (player.classList.contains("active")) {
                budgetUser.dataset.budget -= this.dataset.price;
                budgetUser.innerHTML = `${budgetUser.dataset.budget}€`;
            } else {
                budgetUser.dataset.budget = Number(budgetUser.dataset.budget) + Number(this.dataset.price);
                budgetUser.innerHTML = `${budgetUser.dataset.budget}€`;
            };
        } else {
            let error = document.createElement("div")
            error.innerHTML = `Te has pasado del presupuesto, recarga la página`;
            error.classList.add("alert", "alert-danger");

            document.querySelector("#error").appendChild(error);
            setTimeout(() => {
                error.remove();
            }, 2000);
        }
    });
};

function printPlayers() {
    btnPlayers.addEventListener(("click"), function(e) {
        for (let player of players) {
            if (player.classList.contains("active")) {
                const alineacion = document.querySelector("#alineacion");
                const div = document.createElement("div");

                div.innerHTML = `
                <div class="col-3 mt-3">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body text-center">
                            <h5 class="card-title">${player.textContent}</h5>
                        </div>
                    </div>
                </div>`;

                alineacion.appendChild(div);
            };
        };
    });
}

printPlayers();
