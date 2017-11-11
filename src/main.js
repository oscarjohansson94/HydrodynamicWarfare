var game = new Phaser.Game(1120, 608, Phaser.CANVAS, '');

game.state.add('level1', level1);
game.state.add('level2', level2);
game.state.add('level3', level3);
game.state.add('level4', level4);
game.state.add('menu_startscreen', state_startscreen);

game.state.start('menu_startscreen');
game.state.add('level5', level5);
game.state.add('level6', level6);

//game.state.start('level1');
