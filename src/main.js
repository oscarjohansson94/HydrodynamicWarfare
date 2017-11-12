var game = new Phaser.Game(1220, 608, Phaser.CANVAS, '');

game.state.add('menu_startscreen', state_startscreen);
game.state.add('level1', level1);
game.state.add('level2', level2);
game.state.add('level3', level3);
game.state.add('level4', level4);
game.state.add('level5', level5);
game.state.add('level6', level6);
game.state.add('level7', level7);
game.state.add('level8', level8);
game.state.add('level9', level9);
game.state.add('level10', level10);

game.state.start('menu_startscreen');
