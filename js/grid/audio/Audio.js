window.Grid.audio.Audio = function (game) {

    this.theme = this.crash = this.score = undefined;
    this.game = game;

    this.preload = function () {
        this.game.load.audio('theme', ['assets/audio/theme.mp3']);
        this.game.load.audio('score', ['assets/audio/score.mp3']);
        this.game.load.audio('crash', ['assets/audio/crash.mp3']);
    };

    this.init = function () {
        this.keyboard = this.game.input.keyboard;
    };

    this.create = function () {

        this.theme = game.add.audio('theme',1,true);
        this.score = game.add.audio('score',1,true);
        this.crash = game.add.audio('crash',1,true);

        this.theme.play('',0,1,true);
    };

    this.update = function () {
        if (this.keyboard.isDown(Phaser.Keyboard.A)) {
            var theme = this.theme;
            theme.pause();
            this.playCrash();
            setTimeout(function(){theme.resume();},1000);


        }
        else if (this.keyboard.isDown(Phaser.Keyboard.S)) {
            var theme = this.theme;
            theme.pause();
            this.playScore();
            setTimeout(function(){theme.resume();},1000);
        }
    };

    this.playCrash = function() {

        this.crash.play('',0,1,false);
    };

    this.playScore = function() {
        this.score.play('',0,1,false);

    }


};


