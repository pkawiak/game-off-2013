window.Grid.audio.Audio = function (game) {

    this.theme = this.crash = this.score = undefined;
    this.game = game;
    this.mute = undefined;
    this.musicOff = false;

    this.preload = function () {
        this.game.load.spritesheet('mute', 'assets/images/mute.png', 65, 41);

        this.game.load.audio('theme', ['assets/audio/theme.mp3']);
        this.game.load.audio('score', ['assets/audio/score.mp3']);
        this.game.load.audio('crash', ['assets/audio/crash.mp3']);
    };

    this.init = function () {
        this.keyboard = this.game.input.keyboard;
    };

    this.create = function () {

        this.mute = this.game.add.button(30, 22, 'mute', this.muteClick, this, 1, 1, 1);

        //  setting the anchor to the center
        this.mute.anchor.setTo(0.5, 0.5);

        this.theme = game.add.audio('theme', 1, true);
        this.score = game.add.audio('score', 1, true);
        this.crash = game.add.audio('crash', 1, true);

        this.theme.play('', 0, 1, true);
    };

    this.muteClick = function () {
        var theme = this.theme, mute = this.mute;
        if (theme.isPlaying) {
            theme.pause();
            mute.setFrames(0, 0, 0);
        } else {
            theme.resume();
            mute.setFrames(1, 1, 1);

        }

    };

    this.update = function () {
        if (gameOver) {
            this.mute.kill();
            this.theme.pause();
        }
        if (this.keyboard.isDown(Phaser.Keyboard.A)) {
            this.playCrash();
        }
        else if (this.keyboard.isDown(Phaser.Keyboard.S)) {
            this.playScore();
        }
    };

    this.playCrash = function () {
        var theme = this.theme;
        theme.pause();
        this.crash.play('', 0, 1, false);
    };

    this.playScore = function () {
        var theme = this.theme;
//        if (theme.isPlaying) {
//            theme.pause();
//            setTimeout(function(){theme.resume();},1000);
//        }
        this.score.play('', 0, 1, false);

    }


};


