/* eslint no-undef: "off", max-len: "off" */

export default class Cow {
  constructor(stage) {
    this.stage = stage;
    this.cowSize = {
      width: 27,
      height: 22
    };
    this.faceRight = true;
    this.options = {
      startX: width/2,
      originX: width/2
    };
  }

  cowSprites() {
    const cowRight = new Image();
    cowRight.src = "./assets/images/cowRight.png";
    const cowLeft = new Image();
    cowLeft.src = "./assets/images/cowLeft.png";
    let cowSpriteSheet = new createjs.SpriteSheet({
      images: [cowRight, cowLeft],
      frames: [
        [0, 0, 27, 22, 0],
        [34, 0, 27, 22, 0],
        [70, 0, 27, 22, 0],
        [105, 0, 27, 22, 0],
        [144, 0, 27, 22, 0],
        [179, 0, 27, 22, 0],
        [214, 0, 27, 22, 0],
        [249, 0, 27, 22, 0],
        [280, 0, 27, 22, 0],
        [320, 0, 27, 22, 0],
        [4, 0, 27, 22, 1],
        [38, 0, 27, 22, 1],
        [74, 0, 27, 22, 1],
        [109, 0, 27, 22, 1],
        [144, 0, 27, 22, 1],
        [179, 0, 27, 22, 1],
        [214, 0, 27, 22, 1],
        [249, 0, 27, 22, 1],
        [284, 0, 27, 22, 1],
        [324, 0, 27, 22, 1]
      ],
      animations: {
        right: [0, 9],
        left: [10, 18]
      }
    });
    this.cowSprite = new createjs.Sprite(cowSpriteSheet);
    this.cowSprite.name = "cowSprite";
    this.cowSprite.regX = 13;
    this.cowSprite.regY = 11;
    this.cowSprite.startTimer = 1;
    this.cowSprite.x = width/4;
    this.cowSprite.y = 30;

    this.stage.addChild(this.cowSprite);
  }

  move(dir) {
    this.cowSprite.x = this.cowSprite.x + 2 * dir;
  }
}
