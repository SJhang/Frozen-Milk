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
    this.cow = new Cow(stage);
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
    this.populateFlags();
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", e => this.handleTick(e));
  }

  pause() {
    let paused = !createjs.Ticker.getPaused();
    createjs.Ticker.setPaused(paused);
  }

  populateFlags() {
    let startYPos = 600;
    // let randomX = random(70, 200);
    let flagSize = {
      width: 400,
      height: 50
    };

    let flags = new createjs.Container();
    flags.name = "flags";
    flags.cowPassed = false;
    flags.currentYPos = startYPos;

    let leftFlag = new createjs.Bitmap();
    leftFlag.name = "leftFlag";
    leftFlag.sourceRect = new createjs.Rectangle(600, 100, flagSize.width, flagSize.height);
    // leftFlag.x = randomX;
    leftFlag.y = flags.currentYPos;
    // leftFlag.endX = flagSize.width + randomX;
    flags.addChild(leftFlag);

    let rightFlag = new createjs.Bitmap();
    rightFlag.name = "rightFlag";

    stage.addChild(flags);

  }
}
