window.Grid.game.Dot = function (game, audio, score, bonuses) {

    var dot, group, keyboard,
        DOT_STEP = 64,
        MOVE_DURATION = 100,
        moving = false,
        dx = 3, dy = 3;


    this.preload = function () {
        game.load.image('dot', 'assets/images/dot.png');
    };

    this.getDot = function () {
        return dot;
    };

    this.create = function (gr) {
        keyboard = game.input.keyboard;
        group = gr;
        dot = new Phaser.Sprite(game, Grid.WIDTH / 2, Grid.HEIGHT / 2, 'dot');
        dot.anchor = new Phaser.Point(0.5, 0.5);
        game.add.tween(dot.scale).to(
            {x: 0.5, y: 0.5},
            400,
            Phaser.Easing.Elastic.InOut,
            true,
            0,
            99999999999,
            true
        );
        dot.body.immovable = true;
        group.add(dot);

        this.upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        this.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        this.downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);

        this.upKey.onDown.add(function () {
            this.requestMove(0, -DOT_STEP);
        }, this);
        this.downKey.onDown.add(function () {
            this.requestMove(0, DOT_STEP);
        }, this);
        this.leftKey.onDown.add(function () {
            this.requestMove(-DOT_STEP, 0);
        }, this);
        this.rightKey.onDown.add(function () {
            this.requestMove(DOT_STEP, 0);
        }, this);

    };

    this.requestMove = function (x, y) {


        var me = this;
        if (this.canMove(x, y)) {

            if (Grid.DX == Grid.BX && Grid.DY == Grid.BY) {
                this.die();
                audio.playCrash();
                Grid.game.gameOver();
            }

            //    console.log(Grid.SX,Grid.DX,Grid.SY,Grid.DY);
            if (Grid.DX == Grid.SX && Grid.DY == Grid.SY) {
                audio.playScore();
                score.addScore(1000);
                bonuses.removeBonus();
            }

            moving = true;
            game.add.tween(dot).to(
                {x: dot.x + x, y: dot.y + y},
                MOVE_DURATION,
                Phaser.Easing.Linear.None, true
            ).onCompleteCallback(function () {
                    moving = false;

                });
        }
    };

    this.canMove = function (x, y) {
        if (!moving) {
            if (x < 0 && Grid.DX > 0) {
                Grid.DX--;
                return true;
            }
            if (x > 0 && Grid.DX < 6) {
                Grid.DX++;
                return true;
            }
            if (y < 0 && Grid.DY > 0) {
                Grid.DY--;
                return true;
            }
            if (y > 0 && Grid.DY < 6) {
                Grid.DY++;
                return true;
            }
            return false;
        }
        return false;
    };

    this.update = function () {
//        if (keyboard.isDown(Phaser.Keyboard.RIGHT)) {
//        } else if (keyboard.justReleased(Phaser.Keyboard.RIGHT)) {
//            this.requestMove(DOT_STEP, 0);
//        }
//        if (keyboard.isDown(Phaser.Keyboard.LEFT)) {
//        } else if (keyboard.justReleased(Phaser.Keyboard.LEFT)) {
//            this.requestMove(-DOT_STEP, 0);
//        }
//        if (keyboard.isDown(Phaser.Keyboard.UP)) {
//        } else if (keyboard.justReleased(Phaser.Keyboard.UP)) {
//            this.requestMove(0, -DOT_STEP);
//        }
//        if (keyboard.isDown(Phaser.Keyboard.DOWN)) {
//        } else if (keyboard.justReleased(Phaser.Keyboard.DOWN)) {
//            this.requestMove(0, DOT_STEP);
//        }
    };

    this.die = function () {
        dot.alpha = 0;
    };

};