import { Missile } from "./GameObjects/Missile";

export class Input {
    private static axisX: Direction = 0;
    private static axisY: Direction = 0;
    public static getAxisX() {
        return this.axisX;
    }
    public static getAxisY() {
        return this.axisY;
    }
    public static listen() {
        // Key Down
        document.addEventListener("keydown", (event) => {
            switch (event.key) {
                // Go right
                case "d":
                case "D":
                case "ArrowRight":
                    Input.axisX = 1;
                    break;
                // Go left
                case "q":
                case "Q":
                case "ArrowLeft":
                    Input.axisX = -1;
                    break;
                case " ":
                    Input.axisY = -1;
                default:
                    break;
            }
        });

        // Key Realeased
        document.addEventListener("keyup", (event) => {
            switch (event.key) {
                // Player Stops
                case "d":
                case "D":
                case "q":
                case "Q":
                case "ArrowRight":
                case "ArrowLeft":
                    Input.axisX = 0;
                    break;
                case " ":
                    Input.axisY =0;
                    break;
                default:
                    break;
            }
        });
    }
}

type Direction = 0 | 1 | -1;