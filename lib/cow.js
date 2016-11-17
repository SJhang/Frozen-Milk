/* eslint no-undef: "off", max-len: "off" */

export default class Cow {
  constructor(stage) {
    this.stage = stage;
    this.cowSize = {
      width: 27,
      height: 22
    };
  }

  startPosition() {
    const cowIdle = new Image();
    cowIdle.src = "./assets/images/cowIdle.png";
    let cowSpriteIdle = new createjs.SpriteSheet({
      images: [cowIdle],
      frames: [
        [0, 0, 27, 22],
        [34, 0, 27, 22],
        [70, 0, 27, 22],
        [105, 0, 27, 22],
        [140, 0, 27, 22],
        [175, 0, 27, 22],
        [210, 0, 27, 22],
        [245, 0, 27, 22],
        [280, 0, 27, 22],
        [320, 0, 27, 22]
      ],
      animations: {
        idle: [0, 9, "idle", 0.5]
      }
    });

    let cowIdleSprite = new createjs.Sprite(cowSpriteIdle);
    cowIdleSprite.gotoAndPlay("idle");
    cowIdleSprite.x = width/2;
    cowIdleSprite.y = 100;
    this.stage.addChild(cowIdleSprite);
  }
}

// export let cow = new Cow();
