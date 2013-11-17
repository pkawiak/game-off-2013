window.Grid.background.Background = function (game) {

    var background, group;

    this.preload = function () {
        game.load.image('grid_tile', 'assets/images/grid_tile.png');
    };

    this.create = function (gr) {
        group = gr;
        background = new Phaser.TileSprite(game, 0, 0, game.width, game.height - 70, "grid_tile");
        background.alpha = 0.5;
        group.add(background);
        //background.tileScale = new Phaser.Point(0.5, 0.5);
        //background.tilePosition = new Phaser.Point(-64, -64);
    };

};