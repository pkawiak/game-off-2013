window.Grid.game.Lines = function (game) {

    var lines = [],
        group,
        MAX_LINES = 3,
        LINE_VELOCITY = 100,
        BREACH_RADIUS = 50,
        BREACH_WIDTH = BREACH_RADIUS * 2;

    this.preload = function () {
        game.load.image('horizontal_line', 'assets/images/horizontal_line.png');
        game.load.image('vertical_line', 'assets/images/vertical_line.png');
        game.load.image('breach', 'assets/images/breach.png');
    };

    this.create = function (gr) {
        group = gr;
    };

    this.getLines = function () {
        return lines;
    };

    this.randomBreachPoint = function () {
        return Math.random() * (Grid.HEIGHT - BREACH_WIDTH) + BREACH_RADIUS;
    };

    this.addLine = function () {
        var vertical = Math.random() * 100 > 50,
            velocityGreaterThanZero = Math.random() * 100 > 50,
            x, y, imageName, linePart1, linePart2, velocity, breach, breachPoint, breachPointA, breachPointB;

        velocity = {x: 0, y: 0};
        imageName = vertical ? 'vertical_line' : 'horizontal_line';

        if (vertical) {

            if (velocityGreaterThanZero) {
                x = 0;
                velocity.x = LINE_VELOCITY;
            } else {
                x = Grid.WIDTH;
                velocity.x = -LINE_VELOCITY;
            }
            breachPoint = this.randomBreachPoint();
            breachPointA = breachPoint - BREACH_RADIUS;
            breachPointB = breachPoint + BREACH_RADIUS;
            linePart1 = new Phaser.Sprite(game, x, -Grid.HEIGHT + breachPointA, imageName);
            linePart2 = new Phaser.Sprite(game, x, breachPointB, imageName);
            breach = new Phaser.Sprite(game, x, breachPointA, "breach");
            breach.body.height = BREACH_RADIUS * 2;
            breach.body.width = 2;
        } else { //horizontal
            if (velocityGreaterThanZero) {
                y = 0;
                velocity.y = LINE_VELOCITY;
            } else {
                y = Grid.HEIGHT;
                velocity.y = -LINE_VELOCITY;
            }
            breachPoint = this.randomBreachPoint();
            breachPointA = breachPoint - BREACH_RADIUS;
            breachPointB = breachPoint + BREACH_RADIUS;
            linePart1 = new Phaser.Sprite(game, -Grid.HEIGHT + breachPointA, y, imageName);
            linePart2 = new Phaser.Sprite(game, breachPointB, y, imageName);
            breach = new Phaser.Sprite(game, breachPointA, y, "breach");
            breach.body.width = BREACH_RADIUS * 2;
            breach.body.height = 2;
        }


        linePart1.body.velocity.x = velocity.x;
        linePart1.body.velocity.y = velocity.y;
        linePart2.body.velocity.x = velocity.x;
        linePart2.body.velocity.y = velocity.y;
        breach.body.velocity.x = velocity.x;
        breach.body.velocity.y = velocity.y;

        linePart1.__isVertical = vertical;
        linePart2.__isVertical = vertical;
        breach.__isVertical = vertical;
        breach.__isBreach = true;

        lines.push(linePart1);
        lines.push(linePart2);
        lines.push(breach);

        group.add(linePart1);
        group.add(linePart2);
        group.add(breach);
    };

    this.breachPassed = function (breach) {
        group.remove(breach);
        for (var i = 0; i < lines.length; i++) {
            if (lines[i] === breach) {
                lines.splice(i, 1);
                return;
            }
        }
    };

    this.shouldAddLine = function () {
        return lines.length < MAX_LINES;
    };

    this.removeLinesOutOfGrid = function () {
        var i , line, newLines = [];
        for (i = 0; i < lines.length; i++) {
            line = lines[i];
            if (line.__isVertical) {
                if (line.x >= 0 && line.x <= Grid.HEIGHT) {
                    newLines.push(line);
                } else {
                    group.remove(line);
                }
            } else {
                if (line.y >= 0 && line.y <= Grid.WIDTH) {
                    newLines.push(line);
                } else {
                    group.remove(line);
                }
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