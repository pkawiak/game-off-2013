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
        console.log(this.scoreText);
    };

    this.update = function () {
        this.scoreText.setText('Score: ' + Math.round(this.addScore(10)));

    };

    this.addScore = function(howMuch) {
        this.score+=howMuch;
        return this.score;
    }

};


