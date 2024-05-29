import { Assets } from "../Assets.js"
import { GameObject } from "./GameObject.js"

export class Star extends GameObject{

    protected start(): void {
        // Définissez l'image de l'étoile
        this.setImage(Assets.getStarImage());
        // Faite les apparaitre à une position aléatoire dans le canvas
        this.setPosition({
            x : Math.random() * this.getGame().CANVAS_WIDTH,
            y : Math.random() * this.getGame().CANVAS_HEIGHT,
        });
    }

    protected update(): void {
        this.setPosition({
            x : this.getPosition().x,
            y : this.getPosition().y+1
        });
        if(this.getPosition().y > this.getGame().CANVAS_HEIGHT){
            this.setPosition({
                x : this.getPosition().x,
                y : 0
            });
        }
    }

}