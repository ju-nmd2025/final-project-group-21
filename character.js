export let character = {
    x: 225,
    y: 400,
    w: 50,
    h: 50,
    draw() {
        push();
        //shadow
        drawingContext.shadowBlur = 12;
        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 0;
        drawingContext.shadowColor = "#65DD00";

        //character
        fill("#F7F704");
        stroke("#0C0C00");
        rect(this.x, this.y, this.w, this.h);
        pop();


        //mouth
        push();
        fill("#0f6f71ff");
        stroke("#0C0C00");
        let cx = this.x + this.w / 2;
        let topY = this.y + this.h - 25;
        let botY = this.y + this.h - 10;
        triangle(cx - 12, topY, cx + 12, topY, cx, botY);
        pop();
    },
};
