function updateState(game){
  game.world.bringToTop(game.playerGroup);
  game.world.bringToTop(game.waterGroup);
    game.playerGroup.forEach(function(p) {
        p.units += p.reg;
        p.text.text = p.units;
    });
}
