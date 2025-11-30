export let floor = {
    x: 0,
    y: 320,
    w: 550,
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
        backgroundPattern(640, 410, 560, 330, 480, 410);
        backgroundPattern(460, 410, 380, 330, 300, 410);
        backgroundPattern(280, 410, 200, 330, 120, 410);
        backgroundPattern(100, 410, 20, 330, -60, 410);
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
