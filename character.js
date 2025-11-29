export let character = {
    x: 100,
    y: 270,
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
    },

    

};
