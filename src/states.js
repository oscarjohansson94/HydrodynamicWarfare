var state_startscreen = {
  preload: function() {
    menuscreen_preload(game);
  },
  create: function() {
    menuscreen_create(game);
  },
  update: function() {
  },
  shutdown: function() {
  },
  render: function () {
  }
};

var state_selectlevel = {
  preload: function() {
    selectlevel_preload(game);
  },
  create: function() {
    selectlevel_create(game);
  },
  update: function() {
  },
  shutdown: function() {
  },
  render: function () {
  }
};

var level1 = {
  preload: function() {
    game.currentlevel = 1;
    game.map = map1;
    game.nextState = "level2";
    preloadState(game);
  },
  create: function() {
    createState(game);
  },
  update: function() {
    if(!game.pause)
    updateState(game);
  },
  shutdown: function() {
  },
  render: function () {
    //debug(game);
  }
};

var level2 = {
  preload: function() {
    game.currentlevel = 2;
    game.map = map2;
    game.nextState = "level3";
    preloadState(game);
  },
  create: function() {
    createState(game);
  },
  update: function() {
    if(!game.pause)
    updateState(game);
  },
  shutdown: function() {
  },
  render: function () {
    //debug(game);
  }
};

var level3 = {
  preload: function() {
    game.currentlevel = 3;
    game.map = map3;
    game.nextState = "level4";
    preloadState(game);
  },
  create: function() {
    createState(game);
  },
  update: function() {
    if(!game.pause)
    updateState(game);
  },
  shutdown: function() {
  },
  render: function () {
    //debug(game);
  }
};

var level4 = {
  preload: function() {
    game.currentlevel = 4;
    game.map = map4;
    game.nextState = "level5";
    preloadState(game);
  },
  create: function() {
    createState(game);
  },
  update: function() {
    if(!game.pause)
    updateState(game);
  },
  shutdown: function() {
  },
  render: function () {
    //debug(game);
  }
};

var level5 = {
  preload: function() {
    game.currentlevel = 5;
    game.nextState = "level6";
    game.map = map5;
    preloadState(game);
  },
  create: function() {
    createState(game);
  },
  update: function() {
    if(!game.pause)
    updateState(game);
  },
  shutdown: function() {
  },
  render: function () {
    //debug(game);
  }
};

var level6 = {
  preload: function() {
    game.currentlevel = 6;
    game.nextState = "level7";
    game.map = map6;
    preloadState(game);
  },
  create: function() {
    createState(game);
  },
  update: function() {
    if(!game.pause)
    updateState(game);
  },
  shutdown: function() {
  },
  render: function () {
    //debug(game);
  }
};

var level7 = {
  preload: function() {
    game.currentlevel = 7;
    game.nextState = "level8";
    game.map = map7;
    preloadState(game);
  },
  create: function() {
    createState(game);
  },
  update: function() {
    if(!game.pause)
    updateState(game);
  },
  shutdown: function() {
  },
  render: function () {
    //debug(game);
  }
};

var level8 = {
  preload: function() {
    game.currentlevel = 8;
    game.nextState = "level9";
    game.map = map8;
    preloadState(game);
  },
  create: function() {
    createState(game);
  },
  update: function() {
    if(!game.pause)
    updateState(game);
  },
  shutdown: function() {
  },
  render: function () {
    //debug(game);
  }
};

var level9 = {
  preload: function() {
    game.currentlevel = 9;
    game.nextState = "level10";
    game.map = map9;
    preloadState(game);
  },
  create: function() {
    createState(game);
  },
  update: function() {
    if(!game.pause)
    updateState(game);
  },
  shutdown: function() {
  },
  render: function () {
    //debug(game);
  }
};

var level10 = {
  preload: function() {
    game.currentlevel = 10;
    game.nextState = "menu_startscreen";
    game.map = map10;
    preloadState(game);
  },
  create: function() {
    createState(game);
  },
  update: function() {
    if(!game.pause)
    updateState(game);
  },
  shutdown: function() {
  },
  render: function () {
    //debug(game);
  }
};
