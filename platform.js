export let platform = {
    x: 250,
    y: 250,
    w: 80,
    h: 20,

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
    },
};
