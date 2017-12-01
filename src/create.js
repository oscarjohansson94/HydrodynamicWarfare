function createState(game){
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.playerGroup = game.add.group();
  game.waterGroup = game.add.group();
  game.textGroup = game.add.group();
  game.lineGroup = game.add.group();
  game.HUDGroup = game.add.group();
  game.buttonGroup = game.add.group();
  game.add.image(0, 0, 'background');
  game.stage.backgroundColor = "#e1bf92";
  game.pause = false;
  localStorage.setItem("highestlevel", game.currentlevel);

  game.buttonPause =  game.add.button(game.width-50, 10, 'pause', function() {
    game.pause = true;
    game.buttonPlay.visible = true;
    game.buttonPause.visible = false;
    this.game.physics.arcade.isPaused=true;
  }, this, 2, 1, 0);
  game.buttonPause.scale.setTo(0.3,0.3);



  game.buttonPlay =  game.add.button(game.width-50, 10, 'play', function() {
    game.pause = false;
    game.buttonPlay.visible = false;
    game.buttonPause.visible = true;
    this.game.physics.arcade.isPaused=false;
  }, this, 2, 1, 0);
    game.buttonPlay.scale.setTo(0.3,0.3);
    game.buttonPlay.visible = false;

  game.buttonReset =  game.add.button(game.width-100, 10, 'reset', function() {
    game.state.restart();
  }, this, 2, 1, 0);
    game.buttonReset.scale.setTo(0.3,0.3);

  game.buttonGroup.add(game.buttonPause);
  game.buttonGroup.add(game.buttonPlay);
  game.buttonGroup.add(game.buttonReset);

  var cactusCnt = 0;
  game.selection = null;
  game.map.cactus.forEach(function(o) {
    var object = game.add.sprite(o.x, o.y, 'cactus');
    object.tint = getColor(o.owner);
    object.nr = cactusCnt;
    cactusCnt++;
    object.owner = o.owner;
    object.scale.setTo(o.scale, o.scale);
    object.units = o.units;
    object.reg = o.reg; object.inputEnable = true;
    object.anchor.setTo(0.5, 0.5);
    object.text = game.add.text(o.x, o.y, o.units, { font: "15px Arial", fill: "#ffffff",stroke: '#000000', strokeThickness: 5});
    object.text.anchor.setTo(0.5,0.5);
    game.physics.arcade.enable(object);
    object.body.immovable = true;
    game.playerGroup.add(object);
    game.textGroup.add(object.text);
  });

  game.timer = game.time.create(false);
  game.timer.loop(500, function(){if(!game.pause)updateUnits(game);}, this);
  game.timer.start();
  game.aiDumbTimer = game.time.create(false);
  game.aiDumbTimer.loop(3000, function(){if(!game.pause)updateDumbAI(game);}, this);
  game.aiDumbTimer.start();

game.checkGameConditionTimer = game.time.create(false);
game.checkGameConditionTimer.loop(2000, function(){if(!game.pause)checkGameCondition(game);}, this);
game.checkGameConditionTimer.start();


  game.aiOffensiveTimer = game.time.create(false);
  game.aiOffensiveTimer.loop(1000, function(){if(!game.pause)updateOffensiveAI(game);}, this);
  game.aiOffensiveTimer.start();

  game.aiDefensiveTimer = game.time.create(false);
  game.aiDefensiveTimer.loop(1000, function(){if(!game.pause)updateDefensiveAI(game);}, this);
  game.aiDefensiveTimer.start();

  game.aiSmartTimer = game.time.create(false);
  game.aiSmartTimer.loop(1000, function(){if(!game.pause)updateSmartAI(game);}, this);
  game.aiSmartTimer.start();


  game.statusText = game.add.text(game.width/2, game.height/2, "",{ font: "48px Arial", fill: "#ffffff",stroke: '#000000', strokeThickness: 5} );
  game.statusText.anchor.setTo(0.5, 0.5);

  checkGameCondition(game);

}
