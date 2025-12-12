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

function draw() {
  background("#10164E");
  finishText();
}
