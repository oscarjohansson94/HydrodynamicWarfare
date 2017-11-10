function createState(game){
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.playerGroup = game.add.group();
  game.waterGroup = game.add.group();
  game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.5);
  game.map.forEach(function(o) {
    var object = game.add.sprite(o.x, o.y, 'cactus');
    object.tint = getColor(o.owner);
    object.scale.setTo(o.scale, o.scale);
    object.units = o.units;
    game.playerGroup.add(object);
  });
}
