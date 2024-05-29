var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Assets } from "../Assets.js";
import { Input } from "../Input.js";
import { GameObject } from "./GameObject.js";
var Missile = /** @class */ (function (_super) {
    __extends(Missile, _super);
    function Missile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 10;
        return _this;
    }
    Missile.prototype.start = function () {
        this.setImage(Assets.getMissileImage());
        this.setPosition({
            x: this.getGame().CANVAS_WIDTH / 2,
            y: this.getGame().CANVAS_HEIGHT - this.getImage().height - 10
        });
    };
    Missile.prototype.update = function () {
        if ((Input.getAxisX() == -1 && this.getPosition().x != 0)
            ||
                (Input.getAxisX() == 1 && this.getPosition().x < (this.getGame().CANVAS_WIDTH - (this.getImage().width)))) {
            this.setPosition({
                x: this.getPosition().x += this.speed * Input.getAxisX(),
                y: this.getPosition().y > 0 ? this.getPosition().y + this.speed * Input.getAxisY() : this.getGame().CANVAS_HEIGHT - this.getImage().height - 10
            });
        }
    };
    ;
    return Missile;
}(GameObject));
export { Missile };
