window.Grid.background.Background = function (game) {

    var background;

    this.preload = function () {
        game.load.image('grid_tile', 'assets/images/grid_tile.png');
    }

    this.create = function () {
        background = game.add.tileSprite(0, 0, 512, 512, "grid_tile");
        background.alpha = 0.5;
        //background.tileScale = new Phaser.Point(0.5, 0.5);
        //background.tilePosition = new Phaser.Point(-64, -64);
    }

};