import { character } from "./character";
import { floor } from "./floor";
import Platform from "platform";

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

let platforms = [
    new Platform(250, 250, 80, 20),
    new Platform(160, 220, 80, 20),
    new Platform(500, 280, 80, 20),
    new Platform(400, 200, 80, 20),
];

function draw() {
    background("#10164E");

    //platform movement
    for (const platform of platforms) {
        platform.move();
    }

    //set Current platform
    const currentPlatform = standingPlatform(character, platforms);

    // land character n not standing on platform
    if (character.y + character.h < floor.y && !currentPlatform) {
        character.y += 10;
    }

    //standing exactly on platform service
    if (currentPlatform) {
        character.y = currentPlatform.y - character.h;
    }

    character.draw();
    for (const platform of platforms) {
        platform.draw();
    }
    floor.draw();
}

function isOnPlatform(character, platform) {
    const charBottom = character.y + character.h;
    const platformTop = platform.y;

    // right side char > left side plat
    // left side char c < right side plat
    // => match width
    const colliding =
        character.x + character.w > platform.x &&
        character.x < platform.x + platform.w;

    //standing on platform
    if (colliding && charBottom === platformTop) {
        return true;
    }
    //else drop
    return false;
}

//focus on platform that char are standing
function standingPlatform(character, platforms) {
    for (const platform of platforms) {
        if (isOnPlatform(character, platform)) {
            return platform;
        }
    }
    return null;
}

function mouseClicked() {
    if (
        character.y + character.h === floor.y ||
        standingPlatform(character, platforms) !== null
    ) {
        character.y -= 100;
    }
}
