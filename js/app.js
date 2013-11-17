(function () {
    // Create game instance and connect init, create and update methods
    var game = new Phaser.Game(Grid.WIDTH, Grid.HEIGHT + Grid.SCORE_HEIGHT, Phaser.AUTO, "Teh Grid", {
            preload: preload,
            create: create,
            update: update,
            init: init
        }),
        dot = new Grid.game.Dot(game),
        background = new Grid.game.Background(game),
        lines = new Grid.game.Lines(game),
        audio = new Grid.audio.Audio(game),
        allGameObjects,
        collisions = new Grid.game.Collisions(game),
        score = new Grid.score.Score(game);

    function preload() {
        background.preload();
        audio.preload();
        score.preload();
        dot.preload();
        lines.preload();
    }

    function init() {
        score.init();
        audio.init();
    }

    function create() {
        score.create();
        audio.create();
        allGameObjects = game.add.group();
        allGameObjects.y = Grid.SCORE_HEIGHT;
        background.create(allGameObjects);
        dot.create(allGameObjects);
        lines.create(allGameObjects);
        collisions.create(dot, lines);
    }

    function update() {
        dot.update();
        score.update();
        audio.update();
        lines.update();
        collisions.update();
    }

})();