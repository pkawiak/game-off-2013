window.Grid.dot.Dot = function (game) {

    var dot;

    this.preload = function () {
        game.load.image('dot', 'assets/images/dot.png');
    };

    this.create = function () {
        dot = game.add.sprite(0, 0, 'dot');
    };

};