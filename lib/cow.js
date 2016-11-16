/* eslint no-undef: "off", max-len: "off" */

class Cow {
  startPosition() {
    const cow = new Image();

    cow.src = "./assets/images/cow_sprites.png";
    let cowSprite = createjs.SpriteSheet({
      images: [cow],
      frames: {
        width: 35,
        height: 35,
        count: 10,
        regX: 32,
        regY: 64,
        spacing: 0,
        margin: 0
      },
      animations: {
        stand: 0
      }
    });
  }
}

export let cow = new Cow();
