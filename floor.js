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
    },
};
