import * as PIXI from 'pixi.js'
import Loader from './classes/loader';
import './index.scss';

const loader  = new Loader(new PIXI.Loader());

const width = 64;
const height = 64;
const scale = 2;

let sprites = [
    { spriteName: 'floor1', spritePath: require('./assets/sprites/floor_1.png') },
    { spriteName: 'floor2', spritePath: require('./assets/sprites/floor_2.png') },
    { spriteName: 'floor3', spritePath: require('./assets/sprites/floor_3.png') },
]

let map = [
  [1, 1, 3],
  [3, 2, 1],
  [3, 1, 3]
]

const app = new PIXI.Application(window.innerWidth, window.innerHeight, {
    transparent: true
});

document.body.appendChild(app.view);

app.renderer.resize(width * scale, height * scale);

// window.addEventListener("resize", function() {
//     app.renderer.resize(window.innerWidth, window.innerHeight);
// });

loader.createSprites(sprites);

// LOAD
loader.instance.onComplete.add(() => {
    let floor1 = loader.sprites.floor1;
    let floor2 = loader.sprites.floor2;
    let floor3 = loader.sprites.floor3;

    const tileSize = width / 3 * scale;

    // DRAW
    map.forEach((row, rowIndex) => {
        row.forEach((tile, tileIndex) => {
            if (tile === 1) {
                let t = new PIXI.Sprite(floor1.texture);
                t.x = tileIndex * tileSize;
                t.y = rowIndex * tileSize;
                t.height = tileSize;
                t.width = tileSize;

                app.stage.addChild(t);
            } else if ( tile === 2) {
                let t =  new PIXI.Sprite(floor2.texture);

                t.x = tileIndex * tileSize;
                t.y = rowIndex * tileSize;
                t.height = tileSize;
                t.width = tileSize;

                app.stage.addChild(t);
            }  else if ( tile === 3) {
                let t =  new PIXI.Sprite(floor3.texture);

                t.x = tileIndex * tileSize;
                t.y = rowIndex * tileSize;
                t.height = tileSize;
                t.width = tileSize;

                app.stage.addChild(t);
            }
        })
    });

    // UPDATE 
    app.ticker.add(() => {
        
    });
 });

