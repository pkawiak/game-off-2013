window.Grid.game.Dot = function (game) {

    var dot, group, keyboard,
        DOT_SIZE = 32,
        DOT_STEP = 64,
        MOVE_DURATION = 300,
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
    };

    this.requestMove = function (x, y) {
        if (this.canMove(x, y)) {
            moving = true;
            console.log({x: dot.x, y: dot.y});
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
            if (x < 0 && dx > 0) {
                dx--;
                return true;
            }
            if (x > 0 && dx < 6) {
                dx++;
                return true;
            }
            if (y < 0 && dy > 0) {
                dy--;
                return true;
            }
            if (y > 0 && dy < 6) {
                dy++;
                return true;
            }
            return false;
        }
        return false;
    };

    this.update = function () {
        if (keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        } else if (keyboard.justReleased(Phaser.Keyboard.RIGHT)) {
            this.requestMove(DOT_STEP, 0);
        }
        if (keyboard.isDown(Phaser.Keyboard.LEFT)) {
        } else if (keyboard.justReleased(Phaser.Keyboard.LEFT)) {
            this.requestMove(-DOT_STEP, 0);
        }
        if (keyboard.isDown(Phaser.Keyboard.UP)) {
        } else if (keyboard.justReleased(Phaser.Keyboard.UP)) {
            this.requestMove(0, -DOT_STEP);
        }
        if (keyboard.isDown(Phaser.Keyboard.DOWN)) {
        } else if (keyboard.justReleased(Phaser.Keyboard.DOWN)) {
            this.requestMove(0, DOT_STEP);
        }
    };

    this.die = function () {
        dot.alpha = 0;
    };

};