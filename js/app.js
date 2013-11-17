(function () {
//    if (String(window.location.href).search('restart')!=-1) {
//        setInterval(function(){createGame();},1);
//
//    }
    // Create game instance and connect init, create and update methods
    var game = new Phaser.Game(Grid.WIDTH, Grid.HEIGHT + Grid.SCORE_HEIGHT, Phaser.AUTO, "Teh Grid", {
            preload: preload,
            create: create,
            update: update,
            init: init
        }),
        background = new Grid.game.Background(game),
        lines = new Grid.game.Lines(game),
        audio = new Grid.audio.Audio(game),
        allGameObjects,
        score = new Grid.score.Score(game),
        collisions = new Grid.game.Collisions(game, score, audio),
        bombs = new Grid.game.Bombs(game),
        bonuses = new Grid.game.Bonus(game),
        dot = new Grid.game.Dot(game, audio, score, bonuses);

    function preload() {
        this.game.load.spritesheet('start', 'assets/images/start.png', 229, 45);

        background.preload();
        audio.preload();
        score.preload();
        dot.preload();
        bombs.preload();
        bonuses.preload();
        lines.preload();
    }

    function init() {
        score.init();
        audio.init();
    }

    function create() {
        this.welcomeText = this.game.add.bitmapText(200, 250, 'TEH GRID', { font: '50px Arial', align: 'center' });
        this.enterTehGrid = this.game.add.bitmapText(170, 150, 'press SPACE to enter', { font: '30px Arial', align: 'center' });

        this.startKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.startKey.onDown.add(startGame, this);

    }

    function createGame() {
        score.create();
        audio.create();
        allGameObjects = game.add.group();
        allGameObjects.y = Grid.SCORE_HEIGHT;
        background.create(allGameObjects);
        dot.create(allGameObjects);
        bombs.create(allGameObjects);
        bonuses.create(allGameObjects);
        lines.create(allGameObjects);
        collisions.create(dot, lines);
    }

    function startGame() {
        if (!gameStarted) {
            this.welcomeText.setText("");
            this.enterTehGrid.setText("");
            createGame();
            gameStarted = true;
        } else if (UGLY_GLOBAL_LOL) {
            window.location.reload();
        }
    }


    function update() {
        if (gameStarted && !gameOver) {
            dot.update();
            bombs.update();
            bonuses.update();
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
        UGLY_GLOBAL_LOL = true;

    }

})();