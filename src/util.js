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
  game.waterGroup.forEach(function(p) {
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

  drawHUD(game, player, ai1, ai2, ai3);
}


function gameOverCondition(game){
  if(game.statusText.text == "Game over!") {
    game.state.restart();
  }
  game.statusText.text = "Game over!";
}

function winCondition(game){
  if(game.statusText.text == "You win!") {
    game.state.start(game.nextState);
  }
  game.statusText.text = "You win!";

}


function drawHUD(game, player, ai1, ai2, ai3){

game.HUDGroup.removeAll();


var ai1Count = 0;
var ai2Count = 0;
var ai3Count = 0;
var playerCount = 0;

  game.playerGroup.forEach(function(p) {
    if(p.owner == ownerEnum.AI1 && ai1) {
      ai1Count += p.units;
    }else if(p.owner == ownerEnum.AI2 && ai2){
      ai2Count += p.units;
    }else if(p.owner == ownerEnum.AI3 && ai3){
      ai3Count += p.units;
    }else if(p.owner == ownerEnum.PLAYER && player){
      playerCount += p.units;
    }

});

game.waterGroup.forEach(function(w) {

  if(w.owner == ownerEnum.AI1 && ai1) {
    ai1Count++;
  }else if(w.owner == ownerEnum.AI2 && ai2){
    ai2Count++;
  }else if(w.owner == ownerEnum.AI3 && ai3){
    ai3Count++;
  }else if(w.owner == ownerEnum.PLAYER && player){
    playerCount++;
  }

});

  if(playerCount)game.HUDGroup.add(game.add.text(1120, 150, Math.round(playerCount), { font: "24px Arial", fill: "#0000ff",stroke: '#000000', strokeThickness: 5}));
  if(ai1Count)game.HUDGroup.add(game.add.text(1120, 180, Math.round(ai1Count), { font: "24px Arial", fill: "#ff0000",stroke: '#000000', strokeThickness: 5}));
  if(ai2Count)game.HUDGroup.add(game.add.text(1120, 210, Math.round(ai2Count), { font: "24px Arial", fill: "#0cff00",stroke: '#000000', strokeThickness: 5}));
  if(ai3Count)game.HUDGroup.add(game.add.text(1120, 240, Math.round(ai3Count), { font: "24px Arial", fill: "#c300ff",stroke: '#000000', strokeThickness: 5}));


}
