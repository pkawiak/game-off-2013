window.Grid.game.Bombs = function (game) {

    this.bomb = false;
    this.preload = function () {
        game.load.image('bomb', 'assets/images/bomb.png');
    };

    this.createBomb = function (x, y) {
        this.bomb = new Phaser.Sprite(game, Grid.CELL_SIZE * x + 32, Grid.CELL_SIZE * y + 32, 'bomb');
        this.allGameObjects.add(this.bomb);
    };

    this.create = function (allGameObjects) {
        this.allGameObjects = allGameObjects;

    };

    this.removeBomb = function () {
        this.bomb.kill();
        this.bomb = undefined;
    };

    this.update = function () {
        var bx, by;
        if (!this.bomb) {
            bx = this.random();
            by = this.random();
            if (bx != Grid.DX && by != Grid.DY) {
                console.log("New bomb");
                Grid.BX = bx;
                Grid.BY = by;
                this.createBomb(bx, by);
                var me = this;
                setTimeout(function () {
                    me.removeBomb()
                }, Grid.BOMB_TIME);
            }
        }
    };

    this.random = function () {
        return Math.floor(Math.random() * Grid.CELLS_COUNT);
    };

    this.die = function () {

    };

};