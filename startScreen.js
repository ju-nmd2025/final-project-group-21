export const startScreen = {
    draw() {
        background("#10164E");

        push();
        textFont("Tahoma");
        textAlign(CENTER, CENTER);
        textStyle(BOLD);
        textSize(55);
        strokeWeight(6);
        stroke("white");

        fill("#65DD00");
        text("GEOMETRY\nJump", width / 2, 120);
        pop();

        //floor
        push();
        noStroke();
        fill("#1E105B");
        rect(0, 520, 500, 80);
        pop();

        //stroke
        push();
        stroke("#5D5094");
        strokeWeight(6);
        line(0, 520, 500, 520);
        pop();

        //buttons
        //rectangle
        push();
        //shadow
        drawingContext.shadowBlur = 12;
        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 0;
        drawingContext.shadowColor = "#050505ff";
        noStroke();
        fill("#0778B5");
        rect(200, 250, 100, 100);
        pop();

        //Plus
        push();
        //shadow
        drawingContext.shadowBlur = 12;
        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 0;
        drawingContext.shadowColor = "#05050550";
        noStroke();
        fill("#80E82F");
        rect(191, 280, 118, 40);
        pop();

        push();
        noStroke();
        fill("#80E82F");
        rect(230, 240, 40, 118);
        pop();

        //play
        push();
        //shadow
        drawingContext.shadowBlur = 6;
        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 0;
        drawingContext.shadowColor = "#05050550";
        noStroke();
        fill("white");
        triangle(240, 270, 240, 330, 280, 300);
        pop();

        //patterns
        startScreenPattern(640, 600, 560, 530, 480, 600);
        startScreenPattern(460, 600, 380, 530, 300, 600);
        startScreenPattern(280, 600, 200, 530, 120, 600);
        startScreenPattern(100, 600, 20, 530, -60, 600);

        //draw demo

        const demoChar = { x: 225, y: 400, w: 50, h: 50 };
        const demoPlatform = { x: 209, y: 450, w: 80, h: 12 };

        push();
        drawingContext.shadowBlur = 12;
        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 0;
        drawingContext.shadowColor = "#65DD00";
        fill("#F7F704");
        rect(demoChar.x, demoChar.y, demoChar.w, demoChar.h);
        pop();

        push();
        drawingContext.shadowBlur = 12;
        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 0;
        drawingContext.shadowColor = "#FFFFFF";
        fill("#0B0623");
        rect(demoPlatform.x, demoPlatform.y, demoPlatform.w, demoPlatform.h);
        pop();
    },

    click(mX, mY) {
        if (mX > 200 && mX < 300 && mY > 250 && mY < 350) {
            return "play";
        }
        return null;
    },
};

function startScreenPattern(x1, y1, x2, y2, x3, y3) {
    push();
    fill("#0F082C");
    stroke("#130A39");
    strokeWeight(6);
    triangle(x1, y1, x2, y2, x3, y3);
    pop();
}

// function mousePressed() {
//     if (gameState === "start") {
//         if (mouseX > 200 && mouseX < 300 && mouseY > 250 && mouseY < 350) {
//             gameState = "play";
//         }
//     }
// }

