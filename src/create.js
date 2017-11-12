function createState(game){
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.playerGroup = game.add.group();
  game.waterGroup = game.add.group();
  game.textGroup = game.add.group();
  game.lineGroup = game.add.group();
  game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.5);
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
  game.timer.loop(500, function(){updateUnits(game);}, this);
  game.timer.start();
  game.aiDumbTimer = game.time.create(false);
  game.aiDumbTimer.loop(3000, function(){updateDumbAI(game);}, this);
  game.aiDumbTimer.start();

game.checkGameConditionTimer = game.time.create(false);
game.checkGameConditionTimer.loop(5000, function(){checkGameCondition(game);}, this);
game.checkGameConditionTimer.start();


  game.aiOffensiveTimer = game.time.create(false);
  game.aiOffensiveTimer.loop(1000, function(){updateOffensiveAI(game);}, this);
  game.aiOffensiveTimer.start();

  game.aiDefensiveTimer = game.time.create(false);
  game.aiDefensiveTimer.loop(1000, function(){updateDefensiveAI(game);}, this);
  game.aiDefensiveTimer.start();

  game.aiSmartTimer = game.time.create(false);
  game.aiSmartTimer.loop(1000, function(){updateSmartAI(game);}, this);
  game.aiSmartTimer.start();


  game.statusText = game.add.text(game.width/2, game.height/2, "",{ font: "48px Arial", fill: "#ffffff",stroke: '#000000', strokeThickness: 5} );
  game.statusText.anchor.setTo(0.5, 0.5);

}
