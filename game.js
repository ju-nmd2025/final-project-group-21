import { character } from "./character";
import { floor } from "./floor";
import platform from "platform";

function setup() {
    createCanvas(550, 400);
}

// Obstacle / Spike / Death
function drawObstacle() {
    push();
    fill("red");
    triangle(180, 300, 210, 240, 240, 300);
    pop();
}

let x = 100;
let y = 100;

function draw() {
    background("#10164E");

    character.draw();
	platform.draw();
    floor.draw();

    platform.x -= 10;
    if(platform.x + platform.w < 0){
        platform.x = 500;
    }

    if(character.y + character.h < 300){
        character.y += 10;
    }

}

function keyPressed(){
    if(character.y + character.h === 300){
        character.y -= 80;
    }
}