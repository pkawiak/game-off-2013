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
        score = new Grid.score.Score(game),
        collisions = new Grid.game.Collisions(game, score);

    function preload() {
        this.game.load.spritesheet('start', 'assets/images/start.png', 229, 45);

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
        this.welcomeText = this.game.add.bitmapText(200, 150, 'GRID', { font: '50px Arial', align: 'center' });
        this.start = this.game.add.button(150, 250, 'start', startGame, this, 0, 0, 0);


    }

    function createGame() {
        score.create();
        audio.create();
        allGameObjects = game.add.group();
        allGameObjects.y = Grid.SCORE_HEIGHT;
        background.create(allGameObjects);
        dot.create(allGameObjects);
        lines.create(allGameObjects);
        collisions.create(dot, lines);
    }

    function startGame() {
        this.start.setFrames(1, 1, 1);
        this.welcomeText.setText("");
        this.start.kill();
        createGame();
        gameStarted = true;
    }


    function update() {
        if (gameStarted) {
            dot.update();
            score.update();
            audio.update();
            lines.update();
            collisions.update();
        }
    }

    Grid.game.gameOver = function () {
        gameOver = true;
        allGameObjects.alpha = 0;
        score.finalScore();

    }

})();