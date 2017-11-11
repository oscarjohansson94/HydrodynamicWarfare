function updateState(game){
  game.world.bringToTop(game.playerGroup);
  game.world.bringToTop(game.textGroup);
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
     game.playerGroup.forEach(function(p) {
      if(p.getBounds().contains(game.input.activePointer.x, game.input.activePointer.y) && p.owner !== ownerEnum.PLAYER) {
        sendUnitsSelection(game, p);
      }
  });
    game.mouseDown = false;
    game.playerGroup.forEach(function(p) {
      if(p.owner === ownerEnum.PLAYER) {
        p.alpha = 1;
      }
    });
  }    
  updateWater(game);
}

function sendUnitsSelection(game, target) {
  game.playerGroup.forEach(function(p) {
    if(p.alpha == 0.5) {
      sendUnitsCactus(game, p, target);
    }
  });
}

function sendUnitsCactus(game, start, end) {
  for(var i = 0; i < start.units/2; i++) {
    createWater(game, start, end);
  }
  start.units /= 2;
}

function createWater(game, start, end) {
  var xCoord = start.x + Math.random()*20-10;
  var yCoord = start.y + Math.random()*20-10;
  var water = game.add.sprite(xCoord,yCoord, 'water');
  var angle =  Math.atan2(xCoord - end.x,yCoord - end.y);
  water.anchor.setTo(0.5, 0.5);
  water.angle =  -180*(angle)/Math.PI + 180;
  water.tint = getColor(start.owner);
  water.owner = start.owner;
  water.target = end;
  game.physics.arcade.enable(water);
  water.body.velocity.y = -Math.cos(angle) * 80;
  water.body.velocity.x = -Math.sin(angle) * 80;
  game.waterGroup.add(water);
}


function updateUnits(game) {
  game.playerGroup.forEach(function(p) {
    p.units += p.reg;
    updateText(p);
  });
}

function updateText(cactus) {
    cactus.text.text = Math.round(cactus.units);
}

function updateWater(game){
  game.waterGroup.forEach(function(w) {
    var dist = Math.sqrt(Math.pow(w.body.x - w.target.x, 2) +
      Math.pow(w.body.y - w.target.y, 2));
    if(dist < w.target.height/2) {
      if(w.owner == w.target.owner){
        w.target.units++;
      } else if(w.target.units > 0) {
        w.target.units--;
      } else {
        changeOwner(w.owner, w.target);
      }
      updateText(w.target);
      w.destroy();
    }
  } );
}

function changeOwner(newOwner, cactus) {
  cactus.owner = newOwner;
  cactus.tint = getColor(newOwner);
}
