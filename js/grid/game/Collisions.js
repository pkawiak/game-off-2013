window.Grid.game.Collisions = function (game, score, audio) {

    var dot, lines;

    this.create = function (dt, ln) {
        dot = dt;
        lines = ln;
    };

    this.update = function () {
        var i,
            dt = dot.getDot(),
            lns = lines.getLines(),
            ln, callback;
        for (i = 0; i < lns.length; i++) {
            ln = lns[i];
            callback = ln.__isBreach ? this.onPass : this.onCollide;
            game.physics.collide(dt, lns[i], callback, null, this);
        }
    };

    this.onCollide = function () {
        dot.die();
        audio.playCrash();

        Grid.game.gameOver();

    };

    this.onPass = function (dot, breach) {
        score.addScore(100);
        lines.breachPassed(breach);
        audio.playScore();
    };
};