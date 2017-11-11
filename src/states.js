var level1 = {
  preload: function() {
    game.map = map1;
    preloadState(game);
  },
  create: function() {
    createState(game);
  },
  update: function() {
    updateState(game);
  },
  shutdown: function() {
  },
  render: function () {
    //debug(game);
  }
};
