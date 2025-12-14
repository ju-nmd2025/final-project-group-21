export const endScreen = {
    draw() {
        background("#10164E");
        floorDetail();
        lineDetail();
        triangle1();
        triangle2();
        triangle3();
        triangle4();
        gameoverText();
        replayRectLeft();
        replayRectRight();
        replayText();
        quitText();
        finalScore();
    },

    click(mX, mY) {
        if (mX > 75 && mX < 240 && mY > 270 && mY < 350) {
            console.log("replay");
            return "replay";
        }
        if (mX > 260 && mX < 425 && mY > 270 && mY < 350) {
            console.log("quit");
            return "quit";
        }
        return null;
    },
};

//floor detail @ bottom
function floorDetail() {
    push();
    noStroke();
    fill("#1E105B");
    rect(0, 520, 500, 80);
    pop();
}

//line detail @ bottom
function lineDetail() {
    push();
    stroke("#5D5094");
    strokeWeight(6);
    line(0, 520, 500, 520);
    pop();
}

//triangle furthest right
function triangle1() {
    push();
    fill("#0F082C");
    stroke("#130A39");
    strokeWeight(6);
    triangle(640, 600, 560, 530, 480, 600);
    pop();
}

//triangle right
function triangle2() {
    push();
    fill("#0F082C");
    stroke("#130A39");
    strokeWeight(6);
    triangle(460, 600, 380, 530, 300, 600);
    pop();
}

//triangle left
function triangle3() {
    push();
    fill("#0F082C");
    stroke("#130A39");
    strokeWeight(6);
    triangle(280, 600, 200, 530, 120, 600);
    pop();
}

//triangle furthest left
function triangle4() {
    push();
    fill("#0F082C");
    stroke("#130A39");
    strokeWeight(6);
    triangle(100, 600, 20, 530, -60, 600);
    pop();
}

//game over! text
function gameoverText() {
    push();
    drawingContext.shadowBlur = 12;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowColor = "#a31800ff";
    textFont("Tahoma");
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(55);
    noStroke();
    fill("#ff2600ff");
    text("GAME OVER!", 250, 200);
    pop();
}

//right rectangle
function replayRectLeft() {
    push();
    strokeWeight(4);
    stroke("#0778B5");
    drawingContext.shadowBlur = 12;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowColor = "#000000ff";
    fill("#80E82F");
    rect(75, 275, 165, 75, 10, 10, 0, 10);
    pop();
}

//left rectangle
function replayRectRight() {
    push();
    strokeWeight(4);
    stroke("#0778B5");
    drawingContext.shadowBlur = 12;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowColor = "#000000ff";
    fill("#80E82F");
    rect(260, 275, 165, 75, 10, 10, 10, 0);
    pop();
}

//replay text in left rectangle
function replayText() {
    push();
    drawingContext.shadowBlur = 10;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowColor = "#000000ff";
    noStroke();
    textFont("Tahoma");
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(32);
    fill("white");
    text("REPLAY", 159, 315);
}

//quit text in right rectangle
function quitText() {
    push();
    drawingContext.shadowBlur = 10;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowColor = "#000000ff";
    noStroke();
    textFont("Tahoma");
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(32);
    fill("white");
    text("QUIT", 341, 315);
}

function finalScore() {
    push();
    fill("white");
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(22);
    text("Your score " + score, 250, 245);
    pop();
}
// function mousePressed() {
//     if (mouseX > 75 && mouseX < 240 && mouseY > 270 && mouseY < 350) {
//         console.log("left");
//     }
// }

// function mouseClicked() {
//     if (mouseX > 260 && mouseX < 425 && mouseY > 270 && mouseY < 350) {
//         console.log("right");
//     }
// }
