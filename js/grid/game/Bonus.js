window.Grid.game.Bonus = function (game) {

    this.bonus = false;
    this.preload = function () {
        game.load.image('bomb', 'assets/images/bonus.png');
    };

    this.newBonus = 100;
    this.createBonus = function (x, y) {
        this.bonus = new Phaser.Sprite(game, Grid.CELL_SIZE * x + 64, Grid.CELL_SIZE * y +64 , 'bomb');
        this.bonus.anchor = new Phaser.Point(0.5, 0.5);
        game.add.tween(this.bonus.scale).to(
            {x: 0.5, y: 0.5},
            400,
            Phaser.Easing.Elastic.InOut,
            true,
            0,
            99999999999,
            true
        );
        this.allGameObjects.add(this.bonus);
    };

    this.create = function (allGameObjects) {
        this.allGameObjects = allGameObjects;

    };

    this.removeBonus = function () {
        this.bonus.kill();
        this.bonus = undefined;
        this.newBonus = Math.floor(Math.random() * 3000);
    };

    this.update = function () {
        var sx, sy;

        if (!this.bonus && this.newBonus>0) {
            this.newBonus--;
            console.log(this.newBonus);
        }
        if (!this.bonus && this.newBonus <= 0) {
            console.log("New bonus");
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
                }, Grid.BONUS_TIME);
            }
        }
    };

    this.random = function () {
        return Math.floor(Math.random() * Grid.CELLS_COUNT);
    };

};