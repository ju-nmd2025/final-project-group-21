function setup() {
  createCanvas(500, 600);
}

function finishText() {
  push();
  drawingContext.shadowBlur = 12;
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

function bruh() {
  push();
  noStroke();
  fill("#1E105B");
  rect(0, 520, 500, 80);
  pop();
}

function bruhx() {
  push();
  stroke("#5D5094");
  strokeWeight(6);
  line(0, 520, 500, 520);
  pop();
}

function btns() {
  push();
  drawingContext.shadowBlur = 12;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowColor = "#050505ff";
  noStroke();
  fill("#0778B5");
  rect(200, 250, 100, 100);
  pop();
}

function plus() {
  push();
  drawingContext.shadowBlur = 12;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowColor = "#05050550";
  noStroke();
  fill("#80E82F");
  rect(191, 280, 118, 40);
  pop();
}

function feck() {
  push();
  noStroke();
  fill("#80E82F");
  rect(230, 240, 40, 118);
  pop();
}

function playButton() {
  push();
  drawingContext.shadowBlur = 6;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowColor = "#05050550";
  noStroke();
  fill("white");
  triangle(240, 270, 240, 330, 280, 300);
  pop();
}

function draw() {
  background("#10164E");
  finishText();
  bruh();
  bruhx();
  btns();
  plus();
  feck();
  playButton();
}
