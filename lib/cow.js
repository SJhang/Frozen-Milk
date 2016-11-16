/* eslint no-undef: "off", max-len: "off" */

class Cow {
  position() {
    const cow = new Image();
    cow.src = "../assets/images/cow_sprites.png";
    let cowSprite = createjs.SpriteSheet({
      images: [image]
    });
    const bitmap = createjs.Bitmap();
  }
}

export let cow = new Cow();
