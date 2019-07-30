import * as PIXI from 'pixi.js';

export default class Loader {
    constructor(loader) {
        this.instance = loader;
        this.sprites = {}
    }

    add(spriteName, spritePath, callback) {
        return this.instance.add(spriteName, spritePath).load(() => callback);
    }

    createSprites(spriteArray, callback) {
        
        spriteArray.forEach(sprite => {
            this.instance.add(sprite.spriteName, sprite.spritePath);
        })

        this.instance.load((loader, resources) => {
            spriteArray.forEach(sprite => {
                this.sprites[sprite.spriteName] = new PIXI.TilingSprite(resources[sprite.spriteName].texture);
            })

            if (callback) {
                callback(this.sprites);
            }
        })
    }
}