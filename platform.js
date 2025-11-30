export default class Platform {
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    move(){
            this.x -= 6;
            if(this.x + this.w < 0){
                this.x = 500;
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
