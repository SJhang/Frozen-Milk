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
    this.currentX = 0;
  }

  cowSprites() {
    const cowRight = new Image();
    cowRight.src = "./assets/images/cowRight.png";
    const cowLeft = new Image();
    cowLeft.src = "./assets/images/cowLeft.png";
    let cowSpriteSheet = new createjs.SpriteSheet({
      images: [cowLeft, cowRight],
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
        [44, 0, 27, 22, 1],
        [80, 0, 27, 22, 1],
        [115, 0, 27, 22, 1],
        [150, 0, 27, 22, 1],
        [185, 0, 27, 22, 1],
        [220, 0, 27, 22, 1],
        [255, 0, 27, 22, 1],
        [290, 0, 27, 22, 1],
        [325, 0, 27, 22, 1]
      ],
      animations: {
        left: [0, 9],
        right: [10, 18]
      }
    });
    this.cowSprite = new createjs.Sprite(cowSpriteSheet);
    this.cowSprite.name = "cowSprite";
    this.cowSprite.regX = 13;
    this.cowSprite.regY = 11;
    this.cowSprite.startTimer = 1;
    this.cowSprite.x = width - 100;
    this.cowSprite.y = 30;

    createjs.Tween.get(this.cowSprite).to({x: width/2, y:180}, 1000, createjs.Ease.getPowInOut(4));
    this.stage.addChild(this.cowSprite);
  }

  move(dir) {
    if (dir === 1) {
      this.cowSprite.x = this.cowSprite.x + 4 * dir;
      this.cowSprite.currentX = this.cowSprite.x;
    } else {
      this.cowSprite.x = this.cowSprite.x + 4 * dir;
      this.cowSprite.currentX = this.cowSprite.x;
    }
  }
}
