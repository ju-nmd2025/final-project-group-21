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


function draw() {
    background("#10164E");

    character.draw();
	platform.draw();
    floor.draw();

    platform.x -= 10;
    if(platform.x + platform.w < 0){
        platform.x = 500;
    }

    // land character
    if(character.y + character.h < floor.y){
        character.y += 10;
    }

}

function mouseClicked(){
    if(character.y + character.h === floor.y){
        character.y -= 80;
    }
}