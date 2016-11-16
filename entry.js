/* eslint no-undef: "off", max-len: "off" */

import Game from './lib/game';
import Snow from './lib/snow';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const stage = new createjs.Stage(canvas);
  new Game(canvas, stage);
});
