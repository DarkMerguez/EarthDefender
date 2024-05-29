/*

METHODE SANS POO :


window.onload = main;

let gameName: string = "EarthDefender!";
console.log(gameName);


function main() {
    // Je récupère la balise nommée canvas
    const canvas = document.querySelector("canvas");
    // Je récupère le contexte du canvas
    // pour pouvoir, à l'avenir, dessiner dedans.
    const context = canvas.getContext("2d");

    const CANVAS_WIDTH = 900;
    const CANVAS_HEIGHT = 500;

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    context.fillStyle = "#141414";  // HexaDecimal Gris foncé
    context.fillRect(
        0, 0,            // [x,y] supérieur gauche
        CANVAS_WIDTH, CANVAS_HEIGHT // [x,y] inférieur droit
    );

    // Je récupère une image qui à pour classe alien
    // querySelector renvoie un Objet de la classe HTMLElement
    // Je précise HTMLImageElement en tant que type de la variable image
    // pour transtyper la classe HTMLElement en un classe fille HTMLImageElement



    // Typescript permet de créer des types à partir des types primitif du langage JavaScript.
    type Direction = 0 | 1 | -1;
    // Le type Direction ne peut avoir comme valeurs exlusivement 0, 1 ou -1.
    let direction: Direction = 0;

    const playerImg: HTMLImageElement = document.querySelector("img.player");
    const alienImg: HTMLImageElement = document.querySelector("img.alien");
    // alienImg.width = 100;
    // alienImg.height = 100;
    const starImg: HTMLImageElement = document.querySelector("img.star");
    // playerImg.width = 100;
    // playerImg.height = 100;

    let playerPos = {
        x: CANVAS_WIDTH / 2,
        y: CANVAS_HEIGHT - 100
    };

    const alienPosition1 = {
        x: Math.random() * 500,
        y: 0
    };
    const alienPosition2 = {
        x: Math.random() * 500,
        y: 0
    };
    const alienPosition3 = {
        x: Math.random() * 500,
        y: 0
    };
    const alienPosition4 = {
        x: Math.random() * 500,
        y: 0
    };


    // Game event loop -------------------------//
    setInterval(() => {
        // Clear context
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        // Draw back background color
        context.fillStyle = "#141414";
        context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        // Draw random stars
        // Code here ...
        for (let i = 0; i < 50; i++) {
            context.drawImage(
                starImg,
                Math.random() * CANVAS_WIDTH,
                Math.random() * CANVAS_HEIGHT,
                starImg.width,
                starImg.height
            );
        }


        // Draw and move random aliens
        // Code here ...
        context.drawImage(
            alienImg,
            alienPosition1.x,
            alienPosition1.y,
            alienImg.width,
            alienImg.height
        )
        context.drawImage(
            alienImg,
            alienPosition2.x,
            alienPosition2.y,
            alienImg.width,
            alienImg.height
        )
        context.drawImage(
            alienImg,
            alienPosition3.x,
            alienPosition3.y,
            alienImg.width,
            alienImg.height
        )
        context.drawImage(
            alienImg,
            alienPosition4.x,
            alienPosition4.y,
            alienImg.width,
            alienImg.height
        )
        alienPosition1.y += 1;
        alienPosition2.y += 1;
        alienPosition3.y += 1;
        alienPosition4.y += 1;


        // Draw and move Player
        context.drawImage(
            playerImg,
            playerPos.x,
            playerPos.y,
            playerImg.width,
            playerImg.height
        );
        // Move the player depending on the direction pressed by
        // the player
        playerPos.x += 10 * direction;

    }, 10);


    // Input Handling--------------------------------//
    // Key Down
    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            // Go right
            case "d":
            case "D":
            case "ArrowRight":
                direction = 1;
                break;
            // Go left
            case "q":
            case "Q":
            case "ArrowLeft":
                direction = -1;
                break;
            default:
                break;
        }
    });

    // Key Released
    document.addEventListener("keyup", (event) => {
        switch (event.key) {
            // Player Stops
            case "d":
            case "D":
            case "q":
            case "Q":
            case "ArrowLeft":
            case "ArrowRight":
                direction = 0;
                break;

            default:
                break;
        }
    });


} */
// METHODE AVEC POO :
import { Game } from "./Classes/Game.js";
window.onload = function () {
    var game = new Game();
    game.start();
};
