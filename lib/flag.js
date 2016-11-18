/* eslint no-undef: "off", max-len: "off" */

export default class Flag {
  constructor(canvas, stage) {
    this.canvas = canvas;
  }

  nextwave() {
    this.populateFlags(true);
    this.populateFlags(false, 250);
  }

  generateRandomX(dir) {
    const x = Math.round(Math.random() * ((60 * width) / 100));
    if (dir){
      return x;
    } else {
      return -x;
    }
  }

  random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  clearFlags() {
    stage.children.pop();
  }

  populateFlags(dir, y = 0) {
    let startYPos = 600 + y;
    let randomX = this.generateRandomX(dir);
    let flagSize = {
      width,
      height: 32
    };

    const flags = new createjs.Container();
    flags.name = "flags";
    flags.cowPassed = false;
    flags.x = -400;
    flags.y = startYPos;

    createjs.Tween.get(flags)
    .to({y: -100}, 3000, createjs.Ease.getPowInOut(1))
    .call(()=>this.clearFlags());

    const leftFlagImage = new Image();
    const rightFlagImage = new Image();
    let randomFlag = Math.floor(Math.random() * 2) + 1;
    if (randomFlag === 1) {
      leftFlagImage.src = "./assets/images/left_blue_flag.png";
      rightFlagImage.src = "./assets/images/right_blue_flag.png";
    } else {
      leftFlagImage.src = "./assets/images/left_red_flag.png";
      rightFlagImage.src = "./assets/images/right_red_flag.png";
    }

    const leftFlag = new createjs.Bitmap(leftFlagImage);
    leftFlag.name = "leftFlag";
    // Math.floor((Math.random()* (flags.x * 60)/100)) - 400
    leftFlag.x = this.random(0, 450);
    console.log(this.random(0, 450));
    leftFlag.endX = leftFlag.x;
    flags.addChild(leftFlag);
    console.log(leftFlag.endX);

    const rightFlag = new createjs.Bitmap(rightFlagImage);
    rightFlag.name = "rightFlag";
    let distanceBetweenFlags = this.random(40, 200);
    let startRightFlag = leftFlag.endX + distanceBetweenFlags;
    rightFlag.x = startRightFlag;
    flags.addChild(rightFlag);

    stage.addChild(flags);
  }

  buildPoints(startX, startY, endX) {
    return {
      topLeft: {x: startX, y: startY},
      topRight: {x: startX+flagSize.width, y: startY},
      bottomLeft: {x: startX, y: startY},
      bottomRight: {x: startX+flagSize.width, y: endY}
    };
  }
}
