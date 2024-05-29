var Assets = /** @class */ (function () {
    function Assets() {
    }
    Assets.getDefaultImage = function () {
        var image = document.querySelector("img#asset_default");
        if (image == null) {
            throw Error("No assets found");
        }
        return image;
    };
    // Ajout du getter d'asset player
    Assets.getPlayerImage = function () {
        var image = document.querySelector("img#asset_player");
        if (image == null) {
            throw Error("No assets found");
        }
        return image;
    };
    // Ajout du getter d'asset alien
    Assets.getAlienImage = function () {
        var image = document.querySelector("img#asset_alien");
        if (image == null) {
            throw Error("No assets found");
        }
        return image;
    };
    // Ajout du getter d'asset star
    Assets.getStarImage = function () {
        var image = document.querySelector("img#asset_star");
        if (image == null) {
            throw Error("No assets found");
        }
        return image;
    };
    // Ajout du getter d'asset star
    Assets.getMissileImage = function () {
        var image = document.querySelector("img#asset_missile");
        if (image == null) {
            throw Error("No assets found");
        }
        return image;
    };
    return Assets;
}());
export { Assets };
