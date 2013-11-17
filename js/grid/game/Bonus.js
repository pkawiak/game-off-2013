window.Grid.game.Bonus = function (game) {

    this.bonus = false;
    this.preload = function () {
        game.load.image('bomb', 'assets/images/bonus.png');
    };

    this.createBonus = function (x, y) {
        this.bonus = new Phaser.Sprite(game, Grid.CELL_SIZE * x + 32, Grid.CELL_SIZE * y + 32, 'bomb');
        this.allGameObjects.add(this.bonus);
    };

    this.create = function (allGameObjects) {
        this.allGameObjects = allGameObjects;

    };

    this.removeBonus = function () {
        this.bonus.kill();
        this.bonus = undefined;
    };

    this.update = function () {
        var sx, sy;
        if (!this.bonus) {
            sx = this.random();
            sy = this.random();
            if (sx != Grid.DX && sy != Grid.DY && Grid.BX!=sx && Grid.BY!=sy) {
                console.log("New bonus");
                Grid.SX = sx;
                Grid.SY = sy;
                this.createBonus(sx, sy);
                var me = this;
                setTimeout(function () {
                    me.removeBonus()
                }, Grid.BOMB_TIME);
            }
        }
    };

    this.random = function () {
        return Math.floor(Math.random() * Grid.CELLS_COUNT);
    };

};