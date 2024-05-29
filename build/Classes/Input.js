var Input = /** @class */ (function () {
    function Input() {
    }
    Input.getAxisX = function () {
        return this.axisX;
    };
    Input.getAxisY = function () {
        return this.axisY;
    };
    Input.listen = function () {
        // Key Down
        document.addEventListener("keydown", function (event) {
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
        document.addEventListener("keyup", function (event) {
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
                    Input.axisY = 0;
                    break;
                default:
                    break;
            }
        });
    };
    Input.axisX = 0;
    Input.axisY = 0;
    return Input;
}());
export { Input };
