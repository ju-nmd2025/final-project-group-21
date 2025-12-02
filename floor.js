export let floor = {
    x: 0,
    y: 520,
    w: 500,
    h: 80,
    floorStroke: 5,
    draw() {
        //floor
        push();
        noStroke();
        fill("#1E105B");
        rect(this.x, this.y, this.w, this.h);
        pop();

        //top stroke
        push();
        stroke("#5D5094");
        strokeWeight(this.floorStroke);
        line(
            this.x,
            this.y + this.floorStroke / 2,
            this.x + this.w,
            this.y + this.floorStroke / 2
        );
        pop();

        //decorations

        const bottomPattern = this.y + this.h;
        const topPattern = this.y - 20;

        backgroundPattern(
            640,
            bottomPattern,
            560,
            topPattern,
            480,
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
            280,
            bottomPattern,
            200,
            topPattern,
            120,
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
    fill("#0F082C");
    stroke("#130A39");
    strokeWeight(6);
    triangle(x1, y1, x2, y2, x3, y3);
    pop();
}
