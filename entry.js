/* eslint no-undef: "off", max-len: "off" */

import Game from './lib/game';

document.addEventListener("DOMContentLoaded", () => {
  $(function () {
    $('[data-toggle="popover"]').popover()
  })

  const canvas = document.getElementById("canvas");
  const stage = new createjs.Stage(canvas);
  new Game(canvas, stage);
});
