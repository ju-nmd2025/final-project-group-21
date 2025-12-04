export default class Platform {
    constructor(x, y, w, h, move = false) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        //movement
        this.move = move;
        this.speed = random(1, 3);
        this.direction = random([-1, 1]);
    }

    moveLeftRight() {
        if (this.move === false) {
            return; //stop when move = false
        } else {
            this.x += this.speed * this.direction; //left or right base on - / +
            if (this.x < 0 || this.x + this.w >= width) {
                this.direction *= -1; // change direction
            }
        }
    }

    draw() {
        push();
        //shadow
        drawingContext.shadowBlur = 12;
        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 0;
        drawingContext.shadowColor = "#FFFFFF";

        fill("#0B0623");
        stroke("#FFFFFF");

        rect(this.x, this.y, this.w, this.h);
        pop();
    }
}
