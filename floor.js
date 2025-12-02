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
        backgroundPattern(640, 600, 560, 500, 480, 600);
        backgroundPattern(460, 600, 380, 500, 300, 600);
        backgroundPattern(280, 600, 200, 500, 120, 600);
        backgroundPattern(100, 600, 20, 500, -60, 600);
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
