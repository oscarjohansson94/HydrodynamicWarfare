var ownerEnum = {
  NONE: 0,
  PLAYER: 1,
  AI1: 2,
  AI2: 3,
  AI3: 4
}

var aiEnum = {
  DUMB: 0,
  OFFENSIVE: 1,
  DEFENSIVE: 2,
  SMART: 3
}

function getColor(owner) {
  if(owner === ownerEnum.NONE) {
    return 0xa9a9aa;
  } else if (owner === ownerEnum.PLAYER) {
    return 0x0000ff;
  } else if (owner === ownerEnum.AI1) {
    return 0xff0000;
  } else if (owner === ownerEnum.AI2) {
    return 0x0cff00;
  } else if (owner === ownerEnum.AI3) {
    return 0xc300ff;
  }
}

function debug(game) {
  game.playerGroup.forEach(function(p) {
    game.debug.body(p, 'rgba(0, 0, 235, 1)', false);
  });
  game.waterGroup.forEach(function(w) {
    game.debug.body(w, 'rgba(255, 0, 0, 1)', false);
  });

}


function checkGameCondition(game) {
  var ai1 = false;
  var ai2 = false;
  var ai3 = false;
  var player = false;

  game.playerGroup.forEach(function(p) {
    if(p.owner == ownerEnum.AI1) {
      ai1 = true;
    }else if(p.owner == ownerEnum.AI2){
      ai2 = true;
    }else if(p.owner == ownerEnum.AI3){
      ai3 = true;
    }else if(p.owner == ownerEnum.PLAYER){
      player = true;
    }


  });

  if(!player){
    gameOverCondition(game);
  }

  if(!ai1 && !ai2 && !ai3){
    winCondition(game);
  }
}


function gameOverCondition(game){
  console.log("GAME OVER!");
}

function winCondition(game){
  console.log("YOU WIN!");
}
