var game = new Phaser.Game(1120, 608, Phaser.CANVAS, '');

game.state.add('level1', level1);

game.state.start('level1');
