import { character } from "./character";
import { floor } from "./floor";
import Platform from "platform";
import Spike from "./spike";

let platforms = [
    new Platform(200, 450, 80, 20),
    new Platform(280, 250, 80, 20),
    new Platform(120, 120, 80, 20),
    new Platform(300, 140, 80, 20),
];

let spikes = [
    new Spike(20, 320, 40, 280, 60, 320),
    new Spike(60, 320, 80, 280, 100, 320),
];

let fallSpeed = 2;
let jumpHeight = 100;
let moveSpeed = 8;
const limitLine = 200; //max line character

function setup() {
    createCanvas(500, 600);

    const startPlatform = platforms[0]; //set start position
    character.x = startPlatform.x + startPlatform.w / 2 - character.w / 2;
    character.y = startPlatform.y - character.h;
}

function draw() {
    background("#10164E");

    //key pressed movement
    if (keyIsDown(LEFT_ARROW)) {
        character.x -= moveSpeed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        character.x += moveSpeed;
    }

    //stay in canvas
    if (character.x < 0) {
        character.x = 0;
    }
    if (character.x + character.w > width) {
        character.x = width - character.w;
    }

    //set current platform
    const currentPlatform = standingPlatform(character, platforms);

    //auto jump on platform
    if (currentPlatform) {
        // set character standing on platform
        character.y = currentPlatform.y - character.h;
        // jump
        character.y -= jumpHeight;
    } else {
        character.y += fallSpeed;
    }

    // scroll on jumping
    if (character.y < limitLine) {
        const balanceRange = limitLine - character.y;

        character.y = limitLine;

        //pull down platforms
        for (const plaform of platforms) {
            plaform.y += balanceRange;
        }
        for (const spike of spikes) {
            spike.y1 += balanceRange;
            spike.y2 += balanceRange;
            spike.y3 += balanceRange;
        }

        //pull down floor
        floor.y += balanceRange;
    }

    // Drawing functions
    character.draw();
    for (const platform of platforms) {
        platform.draw();
    }
    for (const spike of spikes) {
        spike.draw();
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
    if (
        colliding &&
        charBottom >= platformTop &&
        charBottom <= platformTop + fallSpeed //not fall too deep 1 fall
    ) {
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
