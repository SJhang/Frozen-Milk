/* eslint no-undef: "off", max-len: "off" */

import Start from './start';
import Flag from './flag';
import Cow from './cow';
import Board from './board';
import Snow from './snow';

export default class Game {
  constructor(canvas, stage) {
    window.stage = stage;
    window.length = canvas.length;
    window.width = canvas.width;

    this.start = new Start();

    createjs.Ticker.setFPS(45);
    createjs.Ticker.on("tick", e => this.handleTick(e));

  }

  handleTick(e) {
    if (!createjs.Ticker.getPaused()) {
      stage.update();
    }
  }

  pause() {
    let paused = !createjs.Ticker.getPuased();
    createjs.Ticker.setPaused(paused);
  }

  populateFlags() {
  }
}
