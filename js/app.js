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
        background = new Grid.background.Background(game);
        score = new Grid.score.Score(game);

    function preload() {
        background.preload();
//        score.preload();
    }

    function init() {
//        score.init();
    }

    function create() {
        background.create();
//        score.create();
    }

    function update() {
//        score.update();

    }

})();