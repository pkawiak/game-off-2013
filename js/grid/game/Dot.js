window.Grid.game.Dot = function (game) {

    var dot, group;

    this.preload = function () {
        game.load.image('dot', 'assets/images/dot.png');
    };

    this.create = function (gr) {
        group = gr;
        dot = new Phaser.Sprite(game, 0, 0, 'dot');
        group.add(dot);
    };

};