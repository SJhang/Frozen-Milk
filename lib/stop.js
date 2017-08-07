/* eslint no-undef: "off", max-len: "off" */

const Stop = (start, stage) => {
  const image = new Image();
  image.src = "./assets/images/background.png";

  image.onload = function() {
    const bitmap = new createjs.Bitmap(image);
    bitmap.x = 0;
    bitmap.y = 0;
    bitmap.name = "background";
    stage.addChild(bitmap);
    addButton();
    stage.update();
  };

  const addButton = () => {
    const goodbyeText = new createjs.Text("Game Over!", "bold 36px Arial", "#fff");
    goodbyeText.textAlign = "center";
    goodbyeText.x = width / 2;
    goodbyeText.y = 150;

    const background = new createjs.Shape();
    background.name = "background";
    background.graphics.beginFill("lightgray").drawRoundRect(0, 0, 150, 60, 10);

    const label = new createjs.Text("Again", "50px Arial");
    label.name = "label";
    label.textAlign = "center";
    label.textBaseline = "middle";
    label.x = 150/2;
    label.y = 60/2;

    const button = new createjs.Container();
    button.name = "button";
    button.x = width/3;
    button.y = height/2;

    button.addChild(background, label);
    button.on("click", () => start());
    window.onkeydown = (e) => {
      let code = e.keyCode ? e.keyCode : e.which;
      if (code === 32) {
        start();
      };
    }
    stage.addChild(button, goodbyeText);
  };
};

export default Stop;
