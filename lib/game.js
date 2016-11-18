/* eslint no-undef: "off", max-len: "off" */

import Start from './start';
import Pause from './pause';
import Flag from './flag';
import Cow from './cow';
import Board from './board';
import Snow from './snow';
import Stop from './stop';

export default class Game {
  constructor(canvas, stage) {
    window.stage = stage;
    this.stage = stage;

    window.height = canvas.height;
    window.width = canvas.width;

    this.cow = new Cow(stage);
    this.flag = new Flag(canvas);
    this.globalTicker = 0;
    this.dir = 1;

    Start(() => this.play(), stage);

    this.scoreText = new createjs.Text("0", "bold 36px Arial", "#d59bf7");
    this.isPlaying = true;
    this.handleTick = this.handleTick.bind(this);
    this.difficulty = 2;
    this.width = 200;
  }

  handleTick(e) {
    if (!createjs.Ticker.getPaused()) {
      this.cow.move(this.dir);
      this.globalTicker++;
      this.tickerCowPlaying();
      this.difficultyIncrease();
      this.collision();
      stage.update();
    }
  }

  play() {
    stage.removeAllChildren();
    Pause(() => this.pause());
    this.score();
    this.cow.cowSprites();
    this.mouseClickToMoveCow();
    this.flag.populateFlags(0, this.width);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", e => this.handleTick(e));
  }

  pause() {
    let paused = !createjs.Ticker.getPaused();
    createjs.Ticker.setPaused(paused);
  }

  start() {
    window.location.reload();
  }

  collision() {
    const cowOnScreen = stage.getChildByName("cowSprite");
    console.log(cowOnScreen.x);
    if (cowOnScreen.x >= width || cowOnScreen.x <= 0) {
      Stop(()=>this.start(), this.stage);
      createjs.Ticker.reset();
    }
  }

  score() {
    this.scoreText.value = 0;
    this.scoreText.name = "scoreText";
    this.scoreText.x = Math.round((canvas.width - this.scoreText.getMeasuredWidth()) - 30);
    this.scoreText.y = 10;
    this.scoreText.shadow = new createjs.Shadow("#000000", 5, 5, 15);
    stage.addChild(this.scoreText);
  }

  mouseClickToMoveCow(event) {
    console.log("click");
    let nextX;
    canvas.addEventListener("click", ()=> {
      if (this.cow.faceRight) {
        this.cow.faceRight = false;
        stage.getChildByName("cowSprite").gotoAndPlay("left");
        this.dir = -1;
      } else {
        this.cow.faceRight = true;
        stage.getChildByName("cowSprite").gotoAndPlay("right");
        this.dir = 1;
      }
    });
  }


  tickerCowPlaying(event) {
    let wrapFlags = stage.getChildByName("wrapFlags");
    let cow = stage.getChildByName("cowSprite");
    console.log(wrapFlags);
    
    if (wrapFlags && wrapFlags.getNumChildren() > 0) {
      for (var i = wrapFlags.getNumChildren()-1; i > 0; i--) {
        let flagContainer = wrapFlags.getChildAt(i);
        debugger;
        if (flagContainer.currentY < -canvas.height) {
          wrapFlags.removeChild(flagContainer);
          continue;
        }

        flagContainer.currentY -= this.difficulty;

        const leftFlag = flagContainer.getChildAt(0);
        leftFlag.y = Math.round(flagContainer.currentY);

        const rightFlag = flagContainer.getChildAt(1);
        rightFlag.y = Math.round(flagContainer.currentY);

        const halfCowHeight = Math.round((22-2)/2);
        const halfCowWidth = Math.round((27-3)/2);

        if (!flagContainer.cowPassed) {
          if (cow.y < flagContainer.currentY) {
            flagContainer.cowPassed = false;
          }

          if (cow.y > flagContainer.currentY && (cow.x > leftFlag.endX && cow.x < (rightFlag.x-450))) {
            flagContainer.cowPassed = true;
            this.scoreText.value++;
            this.scoreText.text = this.scoreText.value;
          }
        }
      }
    }
    // if (this.globalTicker % 90 === 0) {
    //   this.flag.populateFlags(200, this.width);
    // } else {
    //   this.flag.populateFlags(0, this.width);
    // }
  }

  difficultyIncrease() {
    if (this.globalTicker % 900 === 0) {
      this.difficulty+= 2;
      this.width-=10;
    }
  }

  checkGameOver(childOffset) {
    let edgeX = cow.x;
    let edgeY = cow.y;
    const halfCowHeight = Math.round((22-2)/2);
    const halfCowWidth = Math.round((27-3)/2);

    const listEdges = [
      {
        x: cow.x - halfCowWidth,
        y: cow.y - halfCowHeight
      },
      {
        x: cow.x + halfCowWidth,
        y: cow.y - halfCowHeight
      },
      {
        x: cow.x - halfCowWidth,
        y: cow.y + halfCowHeight
      },
      {
        x: cow.x + halfCowWidth,
        y: cow.y + halfCowHeight
      }
    ];

    for (var j = 0; i < listEdges.length; i++) {
      edgeX = listEdges[j].x;
      edgeY = listEdges[j].y;

      if (edgeY > childOffset.left.leftTop.y && edgeY < childOffset.left.topLeft.y) {
        if (edgeY < childOffset.left.leftSide.x || edgeX > childOffset.right.leftTop.x) {
          stage.addChild(cow);
          stage.options.stage = "gameOver";
          stage.removeChild(scoreText);
          createjs.Ticker.removeEventListener("tick", tickerCowPlaying);
          stage.addChild(cow);
          createjs.Tween.get(cow).to({x: edgeGroundX, rotation: 90}, 500, createjs.Ease.sineIn).call(() => {
            setTimeout(() => {
            }, 500);
          });
        }
      }
    }
  }
}
