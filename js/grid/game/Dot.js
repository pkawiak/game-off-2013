window.Grid.game.Dot = function (game) {

    var dot, group, keyboard,
        DOT_SIZE = 32;

    this.preload = function () {
        game.load.image('dot', 'assets/images/dot.png');
    };

    this.create = function (gr) {
        keyboard = game.input.keyboard;
        group = gr;
        dot = new Phaser.Sprite(game, Grid.WIDTH / 2 - DOT_SIZE / 2, Grid.HEIGHT / 2 - DOT_SIZE / 2, 'dot');
        group.add(dot);
    };

    this.update = function () {
        if (keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        } else if (keyboard.justReleased(Phaser.Keyboard.RIGHT)) {
        }
        if (keyboard.isDown(Phaser.Keyboard.LEFT)) {
        } else if (keyboard.justReleased(Phaser.Keyboard.LEFT)) {
        }
        if (keyboard.isDown(Phaser.Keyboard.UP)) {
        } else if (keyboard.justReleased(Phaser.Keyboard.UP)) {
        }
        if (keyboard.isDown(Phaser.Keyboard.DOWN)) {
        } else if (keyboard.justReleased(Phaser.Keyboard.DOWN)) {
        }
    }

};