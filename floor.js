export let floor = {
    x: 0,
    y: 520,
    w: 500,
    h: 80,

    //save start position:
    startX:0,
    startY:520,
    draw() {
        //decorations

        const bottomPattern = this.y + this.h;
        const topPattern = this.y;

        //white patterns
        const offset = 45;
        backgroundPatternWhite(
            640 - offset,
            bottomPattern,
            560 - offset,
            topPattern + 10,
            480 - offset,
            bottomPattern
        );
        backgroundPatternWhite(
            550 - offset,
            bottomPattern,
            470 - offset,
            topPattern + 10,
            390 - offset,
            bottomPattern
        );
        backgroundPatternWhite(
            460 - offset,
            bottomPattern,
            380 - offset,
            topPattern + 10,
            300 - offset,
            bottomPattern
        );
        backgroundPatternWhite(
            370 - offset,
            bottomPattern,
            290 - offset,
            topPattern + 10,
            210 - offset,
            bottomPattern
        );
        backgroundPatternWhite(
            280 - offset,
            bottomPattern,
            200 - offset,
            topPattern + 10,
            120 - offset,
            bottomPattern
        );
        backgroundPatternWhite(
            190 - offset,
            bottomPattern,
            110 - offset,
            topPattern + 10,
            30 - offset,
            bottomPattern
        );
        backgroundPatternWhite(
            100 - offset,
            bottomPattern,
            20 - offset,
            topPattern + 10,
            -60 - offset,
            bottomPattern
        );

        //dark patterns
        backgroundPattern(
            640,
            bottomPattern,
            560,
            topPattern,
            480,
            bottomPattern
        );
        backgroundPattern(
            550,
            bottomPattern,
            470,
            topPattern,
            390,
            bottomPattern
        );
        backgroundPattern(
            460,
            bottomPattern,
            380,
            topPattern,
            300,
            bottomPattern
        );
        backgroundPattern(
            370,
            bottomPattern,
            290,
            topPattern,
            210,
            bottomPattern
        );
        backgroundPattern(
            280,
            bottomPattern,
            200,
            topPattern,
            120,
            bottomPattern
        );
        backgroundPattern(
            190,
            bottomPattern,
            110,
            topPattern,
            30,
            bottomPattern
        );
        backgroundPattern(
            100,
            bottomPattern,
            20,
            topPattern,
            -60,
            bottomPattern
        );
    },
};

function backgroundPattern(x1, y1, x2, y2, x3, y3) {
    push();
    fill("black");
    noStroke();
    // stroke("#130A39");
    // strokeWeight(4);
    triangle(x1, y1, x2, y2, x3, y3);
    pop();
}

function backgroundPatternWhite(x1, y1, x2, y2, x3, y3) {
    push();
    fill("white");
    noStroke();
    triangle(x1, y1, x2, y2, x3, y3);
    pop();
}
