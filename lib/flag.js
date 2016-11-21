/* eslint no-undef: "off", max-len: "off" */

export default class Flag {
  constructor(canvas, stage) {
    this.canvas = canvas;
    this.wrapFlags = new createjs.Container();
    this.wrapFlags.name = "wrapFlags";
  }

  nextwave() {
    this.populateFlags(true);
    this.populateFlags(false, 200);
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
    return Math.floor((Math.random() * max) + min);
  }

  populateFlags(x = 0, w = 0) {
    let startYPos = 610;
    let flagSize = {
      width,
      height: 32
    };


    const flags = new createjs.Container();
    flags.name = "flags";
    this.cowPassed = false;
    flags.x = -400 + x;
    flags.y = startYPos;
    flags.currentY = startYPos;

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
    leftFlag.x = this.random(5, 30);
    leftFlag.endX = leftFlag.x + 400;
    // leftFlag.sourceRect = new createjs.Rectangle(0, 0, 450, 32);
    flags.addChild(leftFlag);

    const rightFlag = new createjs.Bitmap(rightFlagImage);
    rightFlag.name = "rightFlag";
    let distanceBetweenFlags = this.random(50, w);
    let startRightFlag = leftFlag.endX + distanceBetweenFlags;
    rightFlag.x = startRightFlag;
    // rightFlag.sourceRect = new createjs.Rectangle(0, 0, 418, 32);

    flags.addChild(rightFlag);
    this.wrapFlags.addChild(flags);
    stage.addChild(this.wrapFlags);
  }
}
