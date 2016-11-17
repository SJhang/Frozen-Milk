/* eslint no-undef: "off", max-len: "off" */

import Start from './start';
import Pause from './pause';
import Flag from './flag';
import Cow from './cow';
import Board from './board';
import Snow from './snow';

export default class Game {
  constructor(canvas, stage, loader) {
    window.stage = stage;
    window.height = canvas.height;
    window.width = canvas.width;
    window.loader = loader;

    this.cow = new Cow(stage);
    this.flag = new Flag(stage);


    Start(() => this.play(), stage);

    this.isPlaying = true;
  }

  handleTick(e) {
    if (!createjs.Ticker.getPaused()) {
      stage.update();
    }
  }

  play() {
    stage.removeAllChildren();
    Pause(() => this.pause());
    this.cow.startPosition();
    this.flag.populateFlags();
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", e => this.handleTick(e));
  }

  pause() {
    let paused = !createjs.Ticker.getPaused();
    createjs.Ticker.setPaused(paused);
  }

  gameOver() {
    console.log("game over");
    // createjs.Sound.play("game over");
    let gameOver_container = new createjs.Container();
    gameOver_container.name = "gameOver_container";
    stage.addChild(gameOver_container);

    let gameOver_title_bitmap = new createjs.Bitmap()
  }
}
