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
