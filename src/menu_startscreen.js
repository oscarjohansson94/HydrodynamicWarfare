/*
 * Preload images for startscreen
 */
function menuscreen_preload(game){
  //  Load the Google WebFont Loader script
  game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
  game.load.image('background', 'assets/background.png');

  game.load.image('buttonstart', 'assets/buttonstart.png');
}

/*
 * Create menu
 */
function menuscreen_create(game){
  var image = game.add.sprite(0, 0, 'background');
  image.width = game.width;
  text = game.add.text(game.world.centerX, 100, "Hydrodynamic Warfare", {font: 'Revalia', fontSize: 60, align: 'center', stroke: '#000000', strokeThickness: 5});
  text.anchor.setTo(0.5);

  grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
  grd.addColorStop(0, '#e7b720');
  grd.addColorStop(1, '#e3bc94');
  text.fill = grd;

  text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  game.button =  game.add.button(game.width/2, game.height*7/10, 'buttonstart', function() {
    game.state.start('level1');
  }, this, 2, 1, 0);
    game.button.anchor.setTo(0.5,0.5);


    creditText1 = game.add.text(game.width/4, game.height*8/10, "Oscar Johansson",{font: 'Revalia', fontSize: 30, align: 'center', stroke: '#000000', strokeThickness: 5});
    creditText1.anchor.setTo(0.5, 0.5);
    creditText1.fill = grd;

    creditText2 = game.add.text(game.width/4, game.height*9/10, "Github: oscarjohansson94",{font: 'Revalia', fontSize: 30, align: 'center', stroke: '#000000', strokeThickness: 5});
    creditText2.anchor.setTo(0.5, 0.5);
    creditText2.fill = grd;

    creditText3 = game.add.text(game.width*3/4, game.height*8/10, "Oscar Magnusson",{font: 'Revalia', fontSize: 30, align: 'center', stroke: '#000000', strokeThickness: 5});
    creditText3.anchor.setTo(0.5, 0.5);
    creditText3.fill = grd;

    creditText4 = game.add.text(game.width*3/4, game.height*9/10, "Github: balobba",{font: 'Revalia', fontSize: 30, align: 'center', stroke: '#000000', strokeThickness: 5});
    creditText4.anchor.setTo(0.5, 0.5);
    creditText4.fill = grd;
}
