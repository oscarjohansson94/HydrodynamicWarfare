function updateState(game){
  game.world.bringToTop(game.playerGroup);
  game.world.bringToTop(game.waterGroup);
  if(game.input.activePointer.isDown) {
      game.mouseDown = true;
    game.playerGroup.forEach(function(p) {
      if((p.getBounds().contains(game.input.activePointer.x, game.input.activePointer.y))) {
        if(p.owner == ownerEnum.PLAYER) {
          p.alpha = 0.5;
        } 
      }
    });
  }
  if(!game.input.activePointer.isDown && game.mouseDown) {
    game.mouseDown = false;
    game.playerGroup.forEach(function(p) {
      if(p.owner === ownerEnum.PLAYER) {
        p.alpha = 1;
      }
    });
    game.playerGroup.forEach(function(p) {
      if(p.getBounds().contains(game.input.activePointer.x, game.input.activePointer.y) && p.owner !== ownerEnum.PLAYER) {
        //send units
      }


  });
  }    
}


function updateUnits(game) {
  game.playerGroup.forEach(function(p) {
      p.units += p.reg;
      p.text.text = p.units;
  });
}
