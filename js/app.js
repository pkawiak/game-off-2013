(function () {
    // Create game instance and connect init, create and update methods
    var WIDTH = 512,
        HEIGHT = 582,
        game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, "Teh Grid", {
            preload: preload,
            create: create,
            update: update,
            init: init
        }),
        dot = new Grid.dot.Dot(game),
        background = new Grid.background.Background(game),
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
        allGameObjects.y = 70;
        background.create(allGameObjects);
        dot.create(allGameObjects);
    }

    function update() {
        score.update();
    }

})();