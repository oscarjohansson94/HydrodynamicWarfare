var game = new Phaser.Game(1120, 608, Phaser.CANVAS, '');

game.state.add('level1', level1);
game.state.add('level2', level2);
game.state.add('level3', level3);
game.state.add('level4', level4);

game.state.start('level4');
