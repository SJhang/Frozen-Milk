/* eslint no-undef: "off", max-len: "off" */

export default class Flag {
  constructor(stage) {
    this.stage = stage;
  }

  populateFlags() {
    let startYPos = 600;
    let randomX = -Math.random(70, 200);
    let flagSize = {
      width: 400,
      height: 50
    };

    let flags = new createjs.Container();
    flags.name = "flags";
    flags.cowPassed = false;
    flags.currentYPos = startYPos;

    let leftFlag = new createjs.Bitmap();
    leftFlag.name = "leftFlag";
    leftFlag.sourceRect = new createjs.Rectangle(600, 100, flagSize.width, flagSize.height);
    leftFlag.backgroundColor = "black";
    leftFlag.x = randomX;
    leftFlag.y = flags.currentYPos;
    leftFlag.endX = flagSize.width + randomX;
    flags.addChild(leftFlag);

    let rightFlag = new createjs.Bitmap();
    rightFlag.name = "rightFlag";

    stage.addChild(flags);
  }
}


//
// function build_green_cylinder(){
//
//   var start_x = 400;
//   var random_y = -Math.random(70,200);
//
//
//   var vertical_cylinder_container = new createjs.Container();
//   vertical_cylinder_container.bird_passed = false;
//   vertical_cylinder_container.current_x = start_x;
//   vertical_cylinder_container.name = "single_cylinder_vertical";
//   var top_cylinder = new createjs.Bitmap(loader.getResult("main_sprite"));
//   top_cylinder.name ="top_cylinder";
//   top_cylinder.sourceRect = new createjs.Rectangle(112,646,cylinder_size.width, cylinder_size.height);
//   top_cylinder.x = vertical_cylinder_container.current_x;
//   top_cylinder.y = random_y;
//   top_cylinder.end_y = cylinder_size.height + random_y;
//   vertical_cylinder_container.addChild(top_cylinder);
//
//   vertical_cylinder_container.child_offset ={};
//
//   vertical_cylinder_container.child_offset.top = build_point_param(start_x,0,top_cylinder.end_y);
//
//
//   var bottom_cylinder = new createjs.Bitmap(loader.getResult("main_sprite"));
//   //The height of space between 2 cylinder = 115px
//   var start_bottom_cylinder_y = top_cylinder.end_y+ 115;
//   bottom_cylinder.name = "bottom_cylinder";
//   bottom_cylinder.sourceRect = new createjs.Rectangle(168,645,cylinder_size.width, cylinder_size.height);
//   bottom_cylinder.x = vertical_cylinder_container.current_x;
//   bottom_cylinder.y = start_bottom_cylinder_y;
//   bottom_cylinder.end_y = game_size.height;
//   vertical_cylinder_container.addChild(bottom_cylinder);
//
//   vertical_cylinder_container.child_offset.bottom = build_point_param(start_x,start_bottom_cylinder_y,bottom_cylinder.end_y);
//
//   /*stage.addChild(vertical_cylinder_container);*/
//   wrap_cylinder_container.addChild(vertical_cylinder_container);
//
//   stage.addChild(wrap_cylinder_container);
//   stage.addChild(ground);
//   stage.addChild(score_text);
// }
