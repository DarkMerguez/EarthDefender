export class Assets {
    public static getDefaultImage(): HTMLImageElement {
        const image: HTMLImageElement = document.querySelector("img#asset_default");
        if (image == null) {
            throw Error("No assets found");
        }
        return image;
    }
    // Ajout du getter d'asset player
    public static getPlayerImage(): HTMLImageElement {
        const image: HTMLImageElement = document.querySelector("img#asset_player");
        if (image == null) {
            throw Error("No assets found");
        }
        return image;
    }

    // Ajout du getter d'asset alien
    public static getAlienImage(): HTMLImageElement {
        const image: HTMLImageElement = document.querySelector("img#asset_alien");
        if (image == null) {
            throw Error("No assets found");
        }
        return image;
    }

    // Ajout du getter d'asset star
    public static getStarImage(): HTMLImageElement {
        const image: HTMLImageElement = document.querySelector("img#asset_star");
        if (image == null) {
            throw Error("No assets found");
        }
        return image;
    }

    // Ajout du getter d'asset star
    public static getMissileImage(): HTMLImageElement {
        const image: HTMLImageElement = document.querySelector("img#asset_missile");
        if (image == null) {
            throw Error("No assets found");
        }
        return image;
    }
}