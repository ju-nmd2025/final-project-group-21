export default class Spike {
    constructor(x1, y1, x2, y2, x3, y3) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
    }

    move() {
        (this.x1 -= 6), (this.x2 -= 6), (this.x3 -= 6);
        if (this.x3 < 0) {
            this.x1 = 500;
            this.x2 = 500 + 20;
            this.x3 = 500 + 40;
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
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
        pop();
    }
}

export { Spike };
