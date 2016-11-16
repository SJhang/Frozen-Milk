/* eslint no-undef: "off", max-len: "off" */

import Start from './start';
import Pause from './pause';
import Flag from './flag';
import Cow from './cow';
import Board from './board';
import Snow from './snow';

export default class Game {
  constructor(canvas, stage) {
    window.stage = stage;
    window.height = canvas.height;
    window.width = canvas.width;
    
    Start(() => this.play());
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
    //Cow.startPosition();
    // flags.populateFlags();
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", e => this.handleTick(e));
  }

  pause() {
    let paused = !createjs.Ticker.getPaused();
    createjs.Ticker.setPaused(paused);
  }

  populateFlags() {
  }
}
