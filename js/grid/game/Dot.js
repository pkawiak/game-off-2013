window.Grid.game.Dot = function (game) {

    var dot, group, keyboard,
        DOT_SIZE = 32,
        DOT_SPEED = 100,
        DOT_STEP = 64,
        MOVE_DURATION = 500,
        moving = false;

    this.preload = function () {
        game.load.image('dot', 'assets/images/dot.png');
    };

    this.create = function (gr) {
        keyboard = game.input.keyboard;
        group = gr;
        dot = new Phaser.Sprite(game, Grid.WIDTH / 2 - DOT_SIZE / 2, Grid.HEIGHT / 2 - DOT_SIZE / 2, 'dot');
        group.add(dot);
    };

    this.requestMove = function (x, y) {
        if (!moving) {
            moving = true;
            console.log({x: dot.x, y: dot.y});
            game.add.tween(dot).to(
                {x: dot.x + x, y: dot.y + y},
                MOVE_DURATION,
                Phaser.Easing.Sinusoidal.None, true
            ).onCompleteCallback(function () {
                    moving = false;
                });
        }
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
    }

};