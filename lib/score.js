export default class Score {
  constructor(canvas, stage) {
    this.canvas = canvas;
    this.scoreText = new createjs.Text('0', "bold 36px Arial", "#d59bf7");
  }

  initScore(num=0) {
    this.scoreText.text = num;
    this.scoreText.name = "Score Text";
    this.scoreText.x = Math.round((canvas.width - this.scoreText.getMeasuredWidth()) - 60);
    this.scoreText.y = 10;
    this.scoreText.shadow = new createjs.Shadow("#000000", 5, 5, 15);

    stage.addChild(this.scoreText);
  }

  updateScore(num, multiplier) {
    let updatingSpeed = Math.floor((num/30))
    this.scoreText.text = updatingSpeed;
    stage.update();
  }
}
