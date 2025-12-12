function setup() {
  createCanvas(500, 600);
}

function floorDetail() {
  push();
  noStroke();
  fill("#1E105B");
  rect(0, 520, 500, 80);
  pop();
}

function lineDetail() {
  push();
  stroke("#5D5094");
  strokeWeight(6);
  line(0, 520, 500, 520);
  pop();
}

function triangle1() {
  push();
  fill("#0F082C");
  stroke("#130A39");
  strokeWeight(6);
  triangle(640, 600, 560, 530, 480, 600);
  pop();
}

function triangle2() {
  push();
  fill("#0F082C");
  stroke("#130A39");
  strokeWeight(6);
  triangle(460, 600, 380, 530, 300, 600);
  pop();
}

function triangle3() {
  push();
  fill("#0F082C");
  stroke("#130A39");
  strokeWeight(6);
  triangle(280, 600, 200, 530, 120, 600);
  pop();
}

function triangle4() {
  push();
  fill("#0F082C");
  stroke("#130A39");
  strokeWeight(6);
  triangle(100, 600, 20, 530, -60, 600);
  pop();
}

function finishText() {
  push();
  drawingContext.shadowBlur = 15;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowColor = "#d82000ff";
  strokeWeight(6);
  stroke("#d82000ff");
  textFont("Tahoma");
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(55);
  fill("#ff2600ff");
  text("GAME OVER!", 250, 200);
  pop();
}

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

function draw() {
  background("#10164E");
  floorDetail();
  lineDetail();
  triangle1();
  triangle2();
  triangle3();
  triangle4();
  finishText();
  replayRectLeft();
  replayRectRight();
  replayText();
  quitText();
}
