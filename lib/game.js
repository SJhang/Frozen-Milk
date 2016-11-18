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
    // window.loader = loader;
    window.height = canvas.height;
    window.width = canvas.width;

    this.cow = new Cow(stage);
    this.flag = new Flag(canvas);
    // this.loaders();
    this.dir = 1;
    Start(() => this.play(), stage, loader);

    this.isPlaying = true;
  }

  loaders() {
    let manifest = [
      {src: "assets/images/flappy.png", id: "mainSprite"},
      {src: "assets/images/cowIdle.png", id: "cowLeft"}
    ];
    // loader.installPlugin(createjs.Sound);
    // loader.addEventListener("complete");
    // loader.loadManifest(manifest);
  }

  handleTick(e) {
    if (!createjs.Ticker.getPaused()) {
      this.cow.move(this.dir);
      stage.update();
    }
  }

  play() {
    stage.removeAllChildren();
    Pause(() => this.pause());
    this.score();
    this.cow.cowSprites();
    this.mouseClickToMoveCow();
    this.flag.nextwave();

    this.collision();
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", e => this.handleTick(e));
  }

  pause() {
    let paused = !createjs.Ticker.getPaused();
    createjs.Ticker.setPaused(paused);
  }

  score() {
    let scoreText = new createjs.Text("0", "bold 36px Arial", "#d59bf7");
    scoreText.value = 0;
    scoreText.name = "scoreText";
    scoreText.x = Math.round((canvas.width - scoreText.getMeasuredWidth()) - 30);
    scoreText.y = 10;
    scoreText.shadow = new createjs.Shadow("#000000", 5, 5, 15);
    stage.addChild(scoreText);
  }

  collision() {
    let flags = stage.getChildByName("flags").children;
    for (var i = 0; i < flags.length; i++) {
      if (this.cow.x >= flags[i].localToGlobal(0, 0)) {
      }
    }
  }


  mouseClickToMoveCow(event) {
    console.log("click");
    let nextX;
    canvas.addEventListener("click", ()=> {
      if (this.cow.faceRight) {
        this.cow.faceRight = false;
        stage.getChildByName("cowSprite").gotoAndPlay("right");
        nextX = this.cow.x + 30;
        nextX = (nextX <= 500) ? nextX : 0;
        this.dir = -1;
      } else {
        this.cow.faceRight = true;
        stage.getChildByName("cowSprite").gotoAndPlay("left");
        nextX = this.cow.x - 30;
        nextX = (nextX <= 0) ? nextX : 0;
        this.dir = 1;
      }
    });
  }

  cowTicker(event) {
    let wrapFlags = stage.getChildByName("wrapFlags");
    if (wrapFlags && wrapFlags.getNumChildren() > 0) {
      for (var i = wrapFlags.getNumChildren()-1; i > 0 ; i--) {
        let flagContainer = wrapFlags.getChildAt(i);

        if (flagContainer.currentYPos < - flagSize.length) {

        }
      }
    }
  }

  generateFlags() {
  }

  gameOver() {
    console.log("game over");
    // createjs.Sound.play("game over");
    let gameOver_container = new createjs.Container();
    gameOver_container.name = "gameOver_container";
    stage.addChild(gameOver_container);
  }
}
