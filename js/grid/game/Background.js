window.Grid.game.Background = function (game) {

    var background, group;

    this.preload = function () {
        game.load.image('grid_tile', 'assets/images/grid_tile.png');
    };

    this.create = function (gr) {
        group = gr;
        background = new Phaser.TileSprite(game, 0, 0, game.width, game.height - 70, "grid_tile");
        background.alpha = 0.1;

        game.add.tween(background).to(
            {alpha: 0.15},
            400,
            Phaser.Easing.Linear.None,
            true,
            0,
            99999999999,
            true
        );

        group.add(background);
        //background.tileScale = new Phaser.Point(2, 2);
        //background.tilePosition = new Phaser.Point(-64, -64);
    };

};