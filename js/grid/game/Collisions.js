window.Grid.game.Collisions = function (game) {

    var dot, lines;

    this.create = function (dt, ln) {
        dot = dt;
        lines = ln;
    };

    this.update = function () {
        var i,
            dt = dot.getDot(),
            ln = lines.getLines();
        for (i = 0; i < ln.length; i++) {
            game.physics.collide(dt, ln[i], this.onCollide, null, this);
        }
    };

    this.onCollide = function () {
        dot.die();
    };
};