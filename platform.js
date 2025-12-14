export default class Platform {
    constructor(x, y, w, h, move = false, canBreak = false) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        //movement
        this.move = move;
        this.speed = randomRange(1, 3);
        this.direction = randomPick([-1, 1]);

        //break
        this.canBreak = canBreak;
        this.broken = false; //state
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
        if (this.broken === true) {
            // if the platform is broken, stop drawing
            return;
        }
        push();
        //shadow
        drawingContext.shadowBlur = 12;
        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 0;
        drawingContext.shadowColor = "#FFFFFF";
        if (this.move === false) {
            fill("#0B0623");
        }
        if (this.move === true) {
            fill("#9D1E94");
        }
        if (this.canBreak === true) {
            fill("#196B60");
        }

        stroke("#FFFFFF");

        rect(this.x, this.y, this.w, this.h);
        pop();
    }
}

function randomRange(min, max) {
    return Math.random() * (max - min) + min; 
    
}

function randomPick(array){ 
    return array[Math.floor(Math.random()* array.length)]; //return index while round down the result
}