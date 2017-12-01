function selectlevel_preload(game){
  //  Load the Google WebFont Loader script
  game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
  game.load.image('background', 'assets/background.png');
  game.load.image('levelborder', 'assets/levelborder.png');
  game.load.image('1', 'assets/1.png');
  game.load.image('2', 'assets/2.png');
  game.load.image('3', 'assets/3.png');
  game.load.image('4', 'assets/4.png');
  game.load.image('5', 'assets/5.png');
  game.load.image('6', 'assets/6.png');
  game.load.image('7', 'assets/7.png');
  game.load.image('8', 'assets/8.png');
  game.load.image('9', 'assets/9.png');
  game.load.image('10', 'assets/10.png');
}

/*
 * Create menu
 */
function selectlevel_create(game){
  var background = game.add.sprite(0, 0, 'background');
  background.width = game.width;
  text = game.add.text(game.world.centerX+12, 100, "Select Level", {font: 'Revalia', fontSize: 60, align: 'center', stroke: '#000000', strokeThickness: 5});
  text.anchor.setTo(0.5);
  var levelborder = game.add.sprite(game.world.centerX, 140, 'levelborder');
  levelborder.anchor.setTo(0.5, 0);
  var highestlevel = localStorage.getItem("highestlevel");
  if(highestlevel == null) {
    highestlevel = 1;
  }
  for(var i = 0; i < highestlevel; i++) {
    var level = 'level' + i.toString();
    game.add.button(game.world.centerX - 100 + 90 * (i%3), 160 + Math.floor(i/3)*90, (i+1).toString(), function() {
      game.state.start('level' + this.key);

    }).scale.setTo(0.7,0.7);
  }

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#e7b720');
  grd.addColorStop(1, '#e3bc94');
  text.fill = grd;
  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
}
