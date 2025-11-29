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

    //platform movement
    platform.x -= 10;
    if(platform.x + platform.w < 0){
        platform.x = 500;
    }



    // land character
    if(character.y + character.h < floor.y){
        character.y += 10;
    }

}

function isOnPlatform(character,platform){
    const charBottom = character.y + character.h;
    const platformTop = platform.y;

    // right side char > left side plat
    // left side char c < right side plat
    // => match width
    const colliding = character.x + character.w > platform.x && character.x < platform.x + platform.w;

    //standing on platform
    if(colliding && charBottom === platformTop){
        return true
    }
    //else drop
    return false;
}

function mouseClicked(){
    if(character.y + character.h === floor.y){
        character.y -= 80;
    }
}