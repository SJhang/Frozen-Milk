import Greeting from './greeting';
import Flag from './flag';
import Cow from './cow';
import Board from './board';

export default class Game {
  constructor(canvas, stage) {
    window.stage = stage;
    window.length = canvas.length;
    window.width = canvas.width;
    this.cow = new Cow();
  }

}
