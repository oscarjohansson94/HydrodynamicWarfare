/*
 * Preload images for startscreen
 */
function menuscreen_preload(game){
  //  Load the Google WebFont Loader script
  game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
      game.load.image('background', '../assets/background.png');

  /*
  game.load.image('player0', 'assets/player0.png');
  game.load.image('splash', 'assets/splash.png');

  // placeholder for buttons
  game.load.image('buttonmultiplayer', 'assets/buttonmultiplayer.png');
  game.load.image('buttoncredits', 'assets/buttoncredits.png');
  */
  game.load.image('buttonstart', 'assets/buttonstart.png');
}

var start_button = null;
var start_grd;

/*
 * Create menu
 */
function menuscreen_create(game){
  // set background color
  game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.5);

  // Start game button
  text = game.add.text(game.world.centerX, 100, "Hydrodynamic Warfare");
  text.anchor.setTo(0.5);

  text.font = 'Revalia';
  text.fontSize = 60;

  //  x0, y0 - x1, y1
  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#e7b720');
  grd.addColorStop(1, '#e3bc94');
  text.fill = grd;

  text.align = 'center';
  text.stroke = '#000000';
  text.strokeThickness = 5;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);


  game.multiplayer =  game.add.button(game.width/2, game.height*7/10, 'buttonstart', function() {
    game.state.start('level4');
  }, this, 2, 1, 0);

  /*
  game.multiplayer.anchor.setTo(0.5,0.5);

  game.credits =  game.add.button(game.width/2, game.height*9/10, 'buttoncredits', function() {
    game.state.start('menu_credits');
  }, this, 2, 1, 0);

  game.credits.anchor.setTo(0.5,0.5);
  */

}

function out() {
  start_button.fill = start_grd;
}

function over() {
  console.log("over");
  start_button.fill = '#ff00ff';
}


function menuscreen_update(game){


}
