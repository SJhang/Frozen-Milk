/* eslint no-undef: "off", max-len: "off" */

const Start = (play, stage) => {
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
    const welcomeText = new createjs.Text("GET READY!", "bold 36px Arial", "#fff");
    welcomeText.textAlign = "center";
    welcomeText.x = width / 2;
    welcomeText.y = 150;

    const click = new createjs.Text("Click", "bold 20px Arial");
    click.textAlign = "center";
    click.x = width / 2;
    click.y = 200;

    const background = new createjs.Shape();
    background.name = "background";
    background.graphics.beginFill("#4281A4").drawRoundRect(0, 0, 200, 60, 10);

    const label = new createjs.Text("START", "50px Arial", "#EAD2AC");
    label.name = "label";
    label.textAlign = "center";
    label.textBaseline = "middle";
    label.x = 200/2;
    label.y = 60/2;

    const button = new createjs.Container();
    button.name = "button";
    button.x = width/3;
    button.y = height/3 + 50;

    button.addChild(background, label);
    button.on("click", () => play());
    window.onkeydown = (e) => {
      let code = e.keyCode ? e.keyCode : e.which;
      if (code === 32) {
        play();
      };
    }
    stage.addChild(button, welcomeText);
  };
};

export default Start;
