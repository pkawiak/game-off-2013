window.Grid.score.Score = function (game) {

    this.game = game;
    this.score = 0;
    this.scoreText = undefined;

    this.preload = function () {
        this.game.load.bitmapFont('Arial', 'assets/fonts/font.png', 'assets/fonts/font.xml');
    };

    this.init = function () {
        this.score = 0;
    };

    this.create = function () {
        this.scoreText = this.game.add.bitmapText(145, 0, 'Score', { font: '50px Arial', align: 'center' });
    };

    this.update = function () {
        if (!gameOver) {
            this.scoreText.setText('Score: ' + this.score);
        }

    };

    this.addScore = function (howMuch) {
        if (!gameOver) {
            this.score += howMuch;
            return this.score;
        }
    };


    this.finalScore = function () {
        this.game.add.bitmapText(120, 200, 'Game Over', { font: '50px Arial', align: 'center' });
        this.scoreText.setText("");
        this.game.add.bitmapText(50, 270, 'Total score: ' + this.score, { font: '50px Arial', align: 'center' });
        this.game.add.button(135, 350, 'start', this.restartGame, this, 0, 0, 0);

    };

    this.restartGame = function () {
        window.location.reload();
    }
};


