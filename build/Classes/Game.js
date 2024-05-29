import { Alien } from "./GameObjects/Alien.js";
import { Player } from "./GameObjects/Player.js";
import { Input } from "./Input.js";
import { Star } from "./GameObjects/Star.js";
import { Missile } from "./GameObjects/Missile.js";
var Game = /** @class */ (function () {
    function Game() {
        // Public attributs
        this.CANVAS_WIDTH = 900;
        this.CANVAS_HEIGHT = 600;
        this.nbAliens = 10;
        this.gameObjects = [];
        // Init Game canvas
        var canvas = document.querySelector("canvas");
        canvas.height = this.CANVAS_HEIGHT;
        canvas.width = this.CANVAS_WIDTH;
        this.context = canvas.getContext("2d");
    }
    Game.prototype.start = function () {
        // Clear context
        this.context.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.context.fillStyle = "#141414";
        this.context.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.player = new Player(this);
        this.instanciate(this.player);
        this.missile = new Missile(this);
        this.instanciate(this.missile);
        for (var i = 0; i < this.nbAliens; i++) {
            this.instanciate(new Alien(this));
        }
        /**
         * Instanciation des Stars
         */
        for (var i = 0; i < 300; i++) {
            this.instanciate(new Star(this));
        }
        // Listen to input
        Input.listen();
        // Start game loop
        this.loop();
    };
    Game.prototype.instanciate = function (gameObject) {
        this.gameObjects.push(gameObject);
    };
    Game.prototype.draw = function (gameObject) {
        this.context.drawImage(gameObject.getImage(), gameObject.getPosition().x, gameObject.getPosition().y, gameObject.getImage().width, gameObject.getImage().height);
    };
    Game.prototype.loop = function () {
        var _this = this;
        setInterval(function () {
            // Clear context
            _this.context.clearRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            _this.context.fillStyle = "#141414";
            _this.context.fillRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            _this.gameObjects.forEach(function (go) {
                go.callUpdate();
                _this.draw(go);
            });
            //if (this.missile.getPosition().x = new )
        }, 10);
    };
    return Game;
}());
export { Game };
