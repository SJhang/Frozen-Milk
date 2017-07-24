/* eslint no-undef: "off", max-len: "off" */

const Pause = (pause) => {

  const addButton = () => {
    const background = new createjs.Shape();
    background.name = "background";
    background.graphics.beginFill("lightgray").drawRoundRect(0, 0, 90, 35, 10);

    const label_pause = new createjs.Text("pause", "bold 20px Arial", "#fff");
    label_pause.name = "label_pause";
    label_pause.textAlign = "center";
    label_pause.textBaseline = "middle";
    label_pause.x = 90/2;
    label_pause.y = 30/2;

    const label_resume = new createjs.Text("resume", "bold 20px Arial", "#fff");
    label_resume.name = "label_resume";
    label_resume.textAlign = "center";
    label_resume.textBaseline = "middle";
    label_resume.x = 90/2;
    label_resume.y = 30/2;

    const button = new createjs.Container();
    button.name = "pauseButton";
    button.x = 10;
    button.y = 10;
    button.addChild(background, label_pause);
    button.on('click', () => pause());

    stage.addChild(button);
  };

  addButton();
  stage.update();
};

export default Pause;
