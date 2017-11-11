function updateState(game){
  game.world.bringToTop(game.lineGroup);
  game.world.bringToTop(game.playerGroup);
  game.world.bringToTop(game.textGroup);
  game.world.bringToTop(game.waterGroup);
  if(game.input.activePointer.isDown) {
      game.mouseDown = true;
    game.playerGroup.forEach(function(p) {
      if((p.getBounds().contains(game.input.activePointer.x, game.input.activePointer.y))) {
        if(p.owner == ownerEnum.PLAYER && p.alpha == 1) {
          createLine(game, p);
          p.alpha = 0.5;
        } 
      }
    });
  }
  if(!game.input.activePointer.isDown && game.mouseDown) {
     game.playerGroup.forEach(function(p) {
      if(p.getBounds().contains(game.input.activePointer.x, game.input.activePointer.y)){
        if(p.owner !== ownerEnum.PLAYER) {
         sendUnitsSelection(game, p);
        } else {
          sendFriendlyUnits(game, p);
        }
      }
  });
    game.mouseDown = false;
    game.playerGroup.forEach(function(p) {
      if(p.owner === ownerEnum.PLAYER) {
        p.alpha = 1;
        destroyLines(game);
      }
    });
  }    
  updateWater(game);
  updateLines(game);
}

function sendUnitsSelection(game, target) {
  game.playerGroup.forEach(function(p) {
    if(p.alpha == 0.5) {
      sendUnitsCactus(game, p, target);
    }
  });
}

function sendFriendlyUnits(game, target) {
  game.playerGroup.forEach(function(p) {
    if(p.alpha == 0.5 && p != target) {
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
    if(p.owner !== ownerEnum.NONE) {
    p.units += p.reg;
    updateText(p);
    }
  });
}

function updateText(cactus) {
    cactus.text.text = Math.round(cactus.units);
}

function distance(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}


function updateWater(game){
  game.waterGroup.forEach(function(w) {
    var dist = distance(w.body, w.target);
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
 
function createLine(game, start) {
  var line = game.add.sprite(start.x, start.y, 'line');
  game.lineGroup.add(line);
}


function updateLines(game) {
  game.lineGroup.forEach(function(l) {
  var dist = distance(l, game.input);
  var angle =  Math.atan2(l.x - game.input.x,l.y - game.input.y);
  l.height = dist;
  l.angle = -180*angle/Math.PI + 180;
  });
}

function destroyLines(game) {
  game.lineGroup.removeAll();
}

function updateAI(game) {
  game.playerGroup.forEach(function(p) {
    if(p.owner == ownerEnum.AI1 || p.owner == ownerEnum.AI2 ||p.owner == ownerEnum.AI3) {
      if(p.ai == aiEnum.DUMB) {
        var target = game.playerGroup.getAt(Math.floor(Math.random()*game.playerGroup.length));
        if(target != p) {
          sendUnitsCactus(game, p, target);

        }
      }
    }
  });
}
