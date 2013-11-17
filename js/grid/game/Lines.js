window.Grid.game.Lines = function (game) {

    var lines = [],
        group,
        MAX_LINES = 3,
        LINE_VELOCITY = 100;

    this.preload = function () {
        game.load.image('horizontal_line', 'assets/images/horizontal_line.png');
        game.load.image('vertical_line', 'assets/images/vertical_line.png');
    };

    this.create = function (gr) {
        group = gr;
    };

    this.getLines = function () {
        return lines;
    };

    this.addLine = function () {
        var vertical = Math.random() * 100 > 50,
            velocityGreaterThanZero = Math.random() * 100 > 50,
            x, y, imageName, line, velocity;

        velocity = {x: 0, y: 0};
        imageName = vertical ? 'vertical_line' : 'horizontal_line';

        if (vertical) {
            y = 0;
            if (velocityGreaterThanZero) {
                x = 0;
                velocity.x = LINE_VELOCITY;
            } else {
                x = Grid.WIDTH;
                velocity.x = -LINE_VELOCITY;
            }
        } else { //horizontal
            x = 0;
            if (velocityGreaterThanZero) {
                y = 0;
                velocity.y = LINE_VELOCITY;
            } else {
                y = Grid.HEIGHT;
                velocity.y = -LINE_VELOCITY;
            }
        }

        line = new Phaser.Sprite(game, x, y, imageName);
        line.body.velocity.x = velocity.x;
        line.body.velocity.y = velocity.y;
        lines.push(line);
        group.add(line);
    };


    this.shouldAddLine = function () {
        return lines.length < MAX_LINES;
    };

    this.removeLinesOutOfGrid = function () {
        var i , line, newLines = [];
        for (i = 0; i < lines.length; i++) {
            line = lines[i];
            if (line.x >= 0 && line.x <= Grid.WIDTH && line.y >= 0 && line.y <= Grid.HEIGHT) {
                newLines.push(line);
            } else {
                group.remove(line);
            }
        }
        lines = newLines;
    };

    this.update = function () {
        this.removeLinesOutOfGrid();
        if (this.shouldAddLine()) {
            this.addLine();
        }
    }

};