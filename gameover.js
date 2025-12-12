function setup() {
  createCanvas(500, 600);
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
  drawingContext.shadowBlur = 12;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowColor = "#000000ff";
  noStroke();
  fill("#80E82F");
  rect(75, 275, 165, 75, 10, 10, 0, 10);
  pop();
}

function replayRectRight() {
  push();
  drawingContext.shadowBlur = 12;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowColor = "#000000ff";
  noStroke();
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
  finishText();
  replayRectLeft();
  replayRectRight();
  replayText();
  quitText();
}
