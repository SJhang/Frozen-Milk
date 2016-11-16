/* eslint no-undef: "off", max-len: "off" */

const Start = () => {
  const background = new createjs.Shape();
  background.name = "background";
  background.graphics.beginFill("gray").drawRoundRect(0, 0, 150, 60, 10);

  const label = new createjs.Text("start", "50px Arial");
  label.name = "label";
  label.textAlign = "center";
  label.textBaseline = "middle";
  label.x = 150/2;
  label.y = 60/2;

  const button = new createjs.Container();
  button.name = "button";
  button.x = canvas.width/3;
  button.y = canvas.height/2;

  button.addChild(background, label);
  stage.addChild(button);
};

// const image = new Image();
// image.src = '../assets/images/yeti.png';
//
// image.onload = function() {
//   const bitmap = new createjs.Bitmap(image);
//   bitmap.x = 0;
//   bitmap.y = 0;
//   stage.addChild(bitmap);
//   stage.update();
// };


export default Start;
