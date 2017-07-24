/* eslint no-undef: "off", max-len: "off" */

const Ready = (stage, loader) => {
  let randomBackground = Math.floor(Math.random(1, 2) * 2) + 1;
  if (randomBackground === 1) {
    stage.addChild(createBackground("#4ec0ca"));
  } else {
    stage.addChild(createBackground("#008793"));
  }

  const createBackground = (color) => {
    let graphics = new createjs.Graphics();
    graphics.beginFill(color).drawRect(0, 0, width, height).endFill();
    let background = new createjs.Shape(graphics);
    return background;
  };

};

export default Ready;
