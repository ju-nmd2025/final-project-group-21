function setup() {
  createCanvas(500, 600);
}

function finishText() {
  push();
  textAlign(CENTER, CENTER);
  textSize(32);
  fill("white");
  text("Finish", 200, 200);
  pop();
}

function playAgainRect() {
  push();
  fill(255, 255, 0);
  noStroke();
  rect(100, 250, 200, 50);
  pop();
}

function playAgainText() {
  push();
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(0);
  text("Play Again", 200, 275);
  pop();
}

function draw() {
  background("#10164E");
  finishText();
  playAgainRect();
  playAgainText();
}
