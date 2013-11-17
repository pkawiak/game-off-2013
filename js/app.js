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
        allGameObjects,
        score = new Grid.score.Score(game);

    function preload() {
        background.preload();
        score.preload();
        dot.preload();
    }

    function init() {
        score.init();
    }

    function create() {
        score.create();
        allGameObjects = game.add.group();
        allGameObjects.y = Grid.SCORE_HEIGHT;
        background.create(allGameObjects);
        dot.create(allGameObjects);
    }

    function update() {
        dot.update();
        score.update();
    }

})();