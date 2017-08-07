/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint no-undef: "off", max-len: "off" */

var _start = __webpack_require__(8);

var _start2 = _interopRequireDefault(_start);

var _pause = __webpack_require__(5);

var _pause2 = _interopRequireDefault(_pause);

var _flag = __webpack_require__(4);

var _flag2 = _interopRequireDefault(_flag);

var _cow = __webpack_require__(3);

var _cow2 = _interopRequireDefault(_cow);

var _board = __webpack_require__(2);

var _board2 = _interopRequireDefault(_board);

var _snow = __webpack_require__(7);

var _snow2 = _interopRequireDefault(_snow);

var _stop = __webpack_require__(9);

var _stop2 = _interopRequireDefault(_stop);

var _score = __webpack_require__(6);

var _score2 = _interopRequireDefault(_score);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(canvas, stage) {
    var _this = this;

    _classCallCheck(this, Game);

    window.stage = stage;
    this.stage = stage;

    window.height = canvas.height;
    window.width = canvas.width;

    this.cow = new _cow2.default(stage);
    this.flag = new _flag2.default(canvas);
    this.score = new _score2.default(stage, canvas);
    this.globalTicker = 0;
    this.dir = 1;

    (0, _start2.default)(function () {
      return _this.play();
    }, stage);

    this.isPlaying = true;
    this.handleTick = this.handleTick.bind(this);
    this.difficulty = 2;
    this.width = 200;
  }

  _createClass(Game, [{
    key: 'handleTick',
    value: function handleTick(e) {
      if (!createjs.Ticker.getPaused()) {
        this.cow.move(this.dir);
        this.globalTicker++;
        this.tickerCowPlaying();
        this.difficultyIncrease();
        this.collision();
        this.score.updateScore(this.globalTicker, this.difficulty);
        stage.update();
      }
    }
  }, {
    key: 'play',
    value: function play() {
      var _this2 = this;

      stage.removeAllChildren();
      (0, _pause2.default)(function () {
        return _this2.pause();
      });
      this.score.initScore();
      this.cow.cowSprites();
      this.mouseClickToMoveCow();
      this.flag.populateFlags(0, this.width);
      createjs.Ticker.setFPS(60);
      createjs.Ticker.on("tick", function (e) {
        return _this2.handleTick(e);
      });
    }
  }, {
    key: 'pause',
    value: function pause() {
      var paused = !createjs.Ticker.getPaused();
      createjs.Ticker.setPaused(paused);
    }
  }, {
    key: 'start',
    value: function start() {
      window.location.reload();
    }
  }, {
    key: 'collision',
    value: function collision() {
      var _this3 = this;

      var cowOnScreen = stage.getChildByName("cowSprite");
      if (cowOnScreen.x >= width || cowOnScreen.x <= 0) {
        debugger;
        (0, _stop2.default)(function () {
          return _this3.start();
        }, this.stage);
        createjs.Ticker.reset();
      }
    }
  }, {
    key: 'mouseClickToMoveCow',
    value: function mouseClickToMoveCow(event) {
      var _this4 = this;

      var nextX = void 0;
      canvas.addEventListener("click", function () {
        if (_this4.cow.faceRight) {
          _this4.cow.faceRight = false;
          stage.getChildByName("cowSprite").gotoAndPlay("left");
          _this4.dir = -1;
        } else {
          _this4.cow.faceRight = true;
          stage.getChildByName("cowSprite").gotoAndPlay("right");
          _this4.dir = 1;
        }
      });
    }
  }, {
    key: 'tickerCowPlaying',
    value: function tickerCowPlaying(event) {
      var wrapFlags = stage.getChildByName("wrapFlags");
      var cow = stage.getChildByName("cowSprite");

      if (wrapFlags && wrapFlags.getNumChildren() > 0) {
        for (var i = wrapFlags.getNumChildren() - 1; i > 0; i--) {
          var flagContainer = wrapFlags.getChildAt(i);

          if (flagContainer.currentY < -canvas.height) {
            wrapFlags.removeChild(flagContainer);
            continue;
          }

          flagContainer.currentY -= this.difficulty;

          var leftFlag = flagContainer.getChildAt(0);
          leftFlag.y = Math.round(flagContainer.currentY);

          var rightFlag = flagContainer.getChildAt(1);
          rightFlag.y = Math.round(flagContainer.currentY);

          var halfCowHeight = Math.round((22 - 2) / 2);
          var halfCowWidth = Math.round((27 - 3) / 2);

          if (!flagContainer.cowPassed) {
            if (cow.y < flagContainer.currentY) {
              flagContainer.cowPassed = false;
            }

            if (cow.y > flagContainer.currentY && cow.x > leftFlag.endX && cow.x < rightFlag.x - 450) {
              flagContainer.cowPassed = true;
              this.scoreText.value++;
              this.scoreText.text = this.scoreText.value;
            }
          }
        }
      }
      if (this.globalTicker % 90 === 0) {
        this.flag.populateFlags(200, this.width);
      }
      // else {
      //   this.flag.populateFlags(0, this.width);
      // }
    }
  }, {
    key: 'difficultyIncrease',
    value: function difficultyIncrease() {
      if (this.globalTicker % 900 === 0) {
        this.difficulty += 2;
        this.width -= 10;
      }
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(0);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  $(function () {
    $('[data-toggle="popover"]').popover();
  });

  var canvas = document.getElementById("canvas");
  var stage = new createjs.Stage(canvas);
  new _game2.default(canvas, stage);
}); /* eslint no-undef: "off", max-len: "off" */

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint no-undef: "off", max-len: "off" */

var Board = function Board(stage) {
  _classCallCheck(this, Board);

  this.stage = stage;
};

exports.default = Board;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint no-undef: "off", max-len: "off" */

var Cow = function () {
  function Cow(stage) {
    _classCallCheck(this, Cow);

    this.stage = stage;
    this.cowSize = {
      width: 27,
      height: 22
    };
    this.faceRight = true;
    this.options = {
      startX: width / 2,
      originX: width / 2
    };
    this.currentX = 0;
  }

  _createClass(Cow, [{
    key: "cowSprites",
    value: function cowSprites() {
      var cowRight = new Image();
      cowRight.src = "./assets/images/cowRight.png";
      var cowLeft = new Image();
      cowLeft.src = "./assets/images/cowLeft.png";
      var cowSpriteSheet = new createjs.SpriteSheet({
        images: [cowLeft, cowRight],
        frames: [[0, 0, 27, 22, 0], [34, 0, 27, 22, 0], [70, 0, 27, 22, 0], [105, 0, 27, 22, 0], [144, 0, 27, 22, 0], [179, 0, 27, 22, 0], [214, 0, 27, 22, 0], [249, 0, 27, 22, 0], [280, 0, 27, 22, 0], [320, 0, 27, 22, 0], [4, 0, 27, 22, 1], [44, 0, 27, 22, 1], [80, 0, 27, 22, 1], [115, 0, 27, 22, 1], [150, 0, 27, 22, 1], [185, 0, 27, 22, 1], [220, 0, 27, 22, 1], [255, 0, 27, 22, 1], [290, 0, 27, 22, 1], [325, 0, 27, 22, 1]],
        animations: {
          left: [0, 9],
          right: [10, 18]
        }
      });
      this.cowSprite = new createjs.Sprite(cowSpriteSheet);
      this.cowSprite.name = "cowSprite";
      this.cowSprite.regX = 13;
      this.cowSprite.regY = 11;
      this.cowSprite.startTimer = 1;
      this.cowSprite.x = width - 100;
      this.cowSprite.y = 30;

      createjs.Tween.get(this.cowSprite).to({ x: width / 2, y: 180 }, 1000, createjs.Ease.getPowInOut(4));
      this.stage.addChild(this.cowSprite);
    }
  }, {
    key: "move",
    value: function move(dir) {
      if (dir === 1) {
        this.cowSprite.x = this.cowSprite.x + 4 * dir;
        this.cowSprite.currentX = this.cowSprite.x;
      } else {
        this.cowSprite.x = this.cowSprite.x + 4 * dir;
        this.cowSprite.currentX = this.cowSprite.x;
      }
    }
  }]);

  return Cow;
}();

exports.default = Cow;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint no-undef: "off", max-len: "off" */

var Flag = function () {
  function Flag(canvas, stage) {
    _classCallCheck(this, Flag);

    this.canvas = canvas;
    this.wrapFlags = new createjs.Container();
    this.wrapFlags.name = "wrapFlags";
    this.coordinates = {};
  }

  _createClass(Flag, [{
    key: "nextwave",
    value: function nextwave() {
      this.populateFlags(true);
      this.populateFlags(false, 200);
    }
  }, {
    key: "generateRandomX",
    value: function generateRandomX(dir) {
      var x = Math.round(Math.random() * (60 * width / 100));
      if (dir) {
        return x;
      } else {
        return -x;
      }
    }
  }, {
    key: "random",
    value: function random(min, max) {
      return Math.floor(Math.random() * max + min);
    }
  }, {
    key: "populateFlags",
    value: function populateFlags() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var w = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var startYPos = 610;
      var flagSize = {
        width: width,
        height: 32
      };

      var flags = new createjs.Container();
      flags.name = "flags";
      this.cowPassed = false;
      flags.x = -400 + x;
      flags.y = startYPos;
      flags.currentY = startYPos;

      var leftFlagImage = new Image();
      var rightFlagImage = new Image();
      var randomFlag = Math.floor(Math.random() * 2) + 1;

      if (randomFlag === 1) {
        leftFlagImage.src = "./assets/images/left_blue_flag.png";
        rightFlagImage.src = "./assets/images/right_blue_flag.png";
      } else {
        leftFlagImage.src = "./assets/images/left_red_flag.png";
        rightFlagImage.src = "./assets/images/right_red_flag.png";
      }

      var leftFlag = new createjs.Bitmap(leftFlagImage);
      leftFlag.name = "leftFlag";
      // Math.floor((Math.random()* (flags.x * 60)/100)) - 400
      leftFlag.x = this.random(5, 30);
      leftFlag.endX = leftFlag.x + 400;
      // leftFlag.sourceRect = new createjs.Rectangle(0, 0, 450, 32);
      flags.addChild(leftFlag);

      var rightFlag = new createjs.Bitmap(rightFlagImage);
      rightFlag.name = "rightFlag";
      var distanceBetweenFlags = this.random(50, w);
      var startRightFlag = leftFlag.endX + distanceBetweenFlags;
      rightFlag.x = startRightFlag;
      // rightFlag.sourceRect = new createjs.Rectangle(0, 0, 418, 32);

      // this.coordinates = {
      //   leftEnd: leftFlag.x,
      //   rightEnd: rightFlag.x;
      // }
      flags.addChild(rightFlag);
      this.wrapFlags.addChild(flags);
      stage.addChild(this.wrapFlags);
      console.log(leftFlag.endX, rightFlag.x);
    }
  }]);

  return Flag;
}();

exports.default = Flag;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint no-undef: "off", max-len: "off" */

var Pause = function Pause(pause) {

  var addButton = function addButton() {
    var background = new createjs.Shape();
    background.name = "background";
    background.graphics.beginFill("lightgray").drawRoundRect(0, 0, 90, 35, 10);

    var label_pause = new createjs.Text("pause", "bold 20px Arial", "#fff");
    label_pause.name = "label_pause";
    label_pause.textAlign = "center";
    label_pause.textBaseline = "middle";
    label_pause.x = 90 / 2;
    label_pause.y = 30 / 2;

    var label_resume = new createjs.Text("resume", "bold 20px Arial", "#fff");
    label_resume.name = "label_resume";
    label_resume.textAlign = "center";
    label_resume.textBaseline = "middle";
    label_resume.x = 90 / 2;
    label_resume.y = 30 / 2;

    var button = new createjs.Container();
    button.name = "pauseButton";
    button.x = 10;
    button.y = 10;
    button.addChild(background, label_pause);
    button.on('click', function () {
      return pause();
    });

    stage.addChild(button);
  };

  addButton();
  stage.update();
};

exports.default = Pause;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Score = function () {
  function Score(canvas, stage) {
    _classCallCheck(this, Score);

    this.canvas = canvas;
    this.scoreText = new createjs.Text('0', "bold 36px Arial", "#d59bf7");
  }

  _createClass(Score, [{
    key: "initScore",
    value: function initScore() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.scoreText.text = num;
      this.scoreText.name = "Score Text";
      this.scoreText.x = Math.round(canvas.width - this.scoreText.getMeasuredWidth() - 60);
      this.scoreText.y = 10;
      this.scoreText.shadow = new createjs.Shadow("#000000", 5, 5, 15);

      stage.addChild(this.scoreText);
    }
  }, {
    key: "updateScore",
    value: function updateScore(num, multiplier) {
      var updatingSpeed = Math.floor(num / 30);
      this.scoreText.text = updatingSpeed;
      stage.update();
    }
  }]);

  return Score;
}();

exports.default = Score;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// /* eslint no-undef: "off", max-len: "off" */
//
// export default class Snow {
// 	constructor(canvas, stage) {
// 		const innerWidth = window.innerWidth;
// 		const innerHeight = window.innerHeight;
// 		canvas.length = innerWidth;
// 		canvas.height = innerHeight;
//
// 		const twoPi = Math.PI * 2;
// 		let angle = 0;
// 		snowParticle();
// 		setInterval(draw(), 33);
// 	}
//
// 	snowParticle() {
// 		const maxNumOfParticles = 25;
// 		const particles = [];
//
// 		for (let i = 0; i < maxNumOfParticles; i++) {
// 			particles.push({
// 				x: Math.random() * innerWidth,
// 				y: Math.random() * innerHeight,
// 				radius: Math.random() * 4+1,
// 				density: Math.random() * maxNumOfParticles
// 			});
// 		}
// 	}
//
// 	draw() {
// 		debugger;
// 		const rect = new createjs.Rectangle(0, 0, innerWidth, innerHeight);
//
// 		rect.fillStyle = "rgba(255, 255, 255, 0.8)";
// 		rect.beginPath();
// 		for (var i = 0; i < maxNumOfParticles; i++) {
// 			const particle = particles[i];
// 			canvas.moveTo(particle.x, particle.y);
// 			canvas.arc(particle.x, particle.y, particle.radius, 0, twoPi, true);
// 		}
// 		canvas.fill();
// 		update();
// 		stage.update();
// 	}
//
// 	update() {
// 		angle += 0.02;
// 		for (var i = 0; i < maxNumOfParticles; i++) {
// 			let particle = particles[i];
// 			particle.y += Math.cos(angle + particle.density) + 1 + particle.radius/2;
// 			particle.x += Math.sin(angle) * 2;
//
// 			if (particle.x > innerWidth+5 || particle.x < -5 || particle.y > innerHeight) {
// 				if (i % 3 > 0) {
// 					particles[i] = {
// 						x: Math.random() * innerWidth,
// 						y: -10,
// 						radius: particle.radius,
// 						density: particle.density
// 					};
// 				} else {
// 					if (Math.sin(angle) > 0) {
// 						particles[i] = {
// 							x: -5,
// 							y: Math.random() * innerHeight,
// 							radius: particle.radius,
// 							density: particle.density
// 						};
// 					} else {
// 						particle = {
// 							x: innherWidth * 5,
// 							y: Math.random() * innerHeight,
// 							radius: particle.radius,
// 							density: particle.density
// 						};
// 					}
// 				}
// 			}
// 		}
// 	}
// }


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint no-undef: "off", max-len: "off" */

var Start = function Start(play, stage) {
  var image = new Image();
  image.src = "./assets/images/background.png";

  image.onload = function () {
    var bitmap = new createjs.Bitmap(image);
    bitmap.x = 0;
    bitmap.y = 0;
    bitmap.name = "background";
    stage.addChild(bitmap);
    addButton();
    stage.update();
  };

  var addButton = function addButton() {
    var welcomeText = new createjs.Text("Get Ready!", "bold 36px Arial", "#fff");
    welcomeText.textAlign = "center";
    welcomeText.x = width / 2;
    welcomeText.y = 150;

    var click = new createjs.Text("Click", "bold 20px Arial");
    click.textAlign = "center";
    click.x = width / 2;
    click.y = 200;

    var background = new createjs.Shape();
    background.name = "background";
    background.graphics.beginFill("lightgray").drawRoundRect(0, 0, 150, 60, 10);

    var label = new createjs.Text("start", "50px Arial");
    label.name = "label";
    label.textAlign = "center";
    label.textBaseline = "middle";
    label.x = 150 / 2;
    label.y = 60 / 2;

    var button = new createjs.Container();
    button.name = "button";
    button.x = width / 3;
    button.y = height / 2;

    button.addChild(background, label);
    button.on("click", function () {
      return play();
    });

    stage.addChild(button, welcomeText);
  };
};

exports.default = Start;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint no-undef: "off", max-len: "off" */

var Stop = function Stop(start, stage) {
  var image = new Image();
  image.src = "./assets/images/background.png";

  image.onload = function () {
    var bitmap = new createjs.Bitmap(image);
    bitmap.x = 0;
    bitmap.y = 0;
    bitmap.name = "background";
    stage.addChild(bitmap);
    addButton();
    stage.update();
  };

  var addButton = function addButton() {
    var goodbyeText = new createjs.Text("Game Over!", "bold 36px Arial", "#fff");
    goodbyeText.textAlign = "center";
    goodbyeText.x = width / 2;
    goodbyeText.y = 150;

    var background = new createjs.Shape();
    background.name = "background";
    background.graphics.beginFill("lightgray").drawRoundRect(0, 0, 150, 60, 10);

    var label = new createjs.Text("Again", "50px Arial");
    label.name = "label";
    label.textAlign = "center";
    label.textBaseline = "middle";
    label.x = 150 / 2;
    label.y = 60 / 2;

    var button = new createjs.Container();
    button.name = "button";
    button.x = width / 3;
    button.y = height / 2;

    button.addChild(background, label);
    button.on("click", function () {
      return start();
    });

    stage.addChild(button, goodbyeText);
  };
};

exports.default = Stop;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map