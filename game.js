import { character } from "./character";
import { floor } from "./floor";
import Platform from "platform";
import Spike from "./spike";
import { startScreen } from "./startScreen";
import { endScreen } from "./gameover";

let gameState = "start";
let plaformWidth = 80;
let plaformHeight = 12;

let platforms = [
    new Platform(209, 450, plaformWidth, plaformHeight),
    new Platform(280, 250, plaformWidth, plaformHeight),
    new Platform(120, 120, plaformWidth, plaformHeight),
    new Platform(300, 140, plaformWidth, plaformHeight),
    //prepared platforms
    new Platform(100, 650, plaformWidth, plaformHeight, true),
    new Platform(100, 650, plaformWidth, plaformHeight),
    new Platform(140, 650, plaformWidth, plaformHeight, false, true),
];

//save start platform position
for (let platform of platforms) {
    platform.startX = platform.x;
    platform.startY = platform.y;
}

let spikes = [
    new Spike(400, 60, 420, 20, 440, 60),
    //prepared spikes
    new Spike(20, 600, 40, 560, 60, 600),

];
//save start spike position
for (let spike of spikes) {
    spike.startY1 = spike.y1;
    spike.startY2 = spike.y2;
    spike.startY3 = spike.y3;
}

let insTextY = 488;
let fallSpeed = 5;
let jumpHeight = 200;
let moveSpeed = 8;
const limitLine = 200; //max line character

//score
let score = 0;
let lastPlatform = null;

function setup() {
    createCanvas(500, 600);

    const startPlatform = platforms[0]; //set start position
    character.x = startPlatform.x + startPlatform.w / 2 - character.w / 2;
    character.y = startPlatform.y - character.h;
}

function draw() {
    //reset style
    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = "transparent";
    textAlign(LEFT, TOP);
    textStyle(NORMAL);
    textSize(14);
    noStroke();

    switch (gameState) {
        case "start":
            startScreen.draw();
            break;
        case "play":
            runGame();
            break;
        case "end":
            endScreen.draw();
    }
}

function runGame() {
    background("#10164E");
    runGameBackground();

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
        //if char land on platform + score
        if (currentPlatform !== lastPlatform) {
            score += 50;
            lastPlatform = currentPlatform;
        }

        if (currentPlatform.canBreak) {
            // if the platform is breakable type
            currentPlatform.broken = true; // change state
        }
        // set character standing on platform
        character.y = currentPlatform.y - character.h;
        // jump

        character.y -= jumpHeight;
    } else {
        character.y += fallSpeed;
    }

    // dead char
    if (character.y > height) {
        gameState = "end";
        return; //stop lg
    }

    for (let spike of spikes) {
        if (checkSpikeCollision(character, spike)) {
            gameState = "end";
            return;
        }
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

        //pull down text
        insTextY += balanceRange;
        //pull down floor
        floor.y += balanceRange;
    }

    //reset platform && spike func
    for (const plaform of platforms) {
        if (plaform.y > height) {
            resetPlatform(plaform);
        }
    }

    for (const spike of spikes) {
        if (spike.y1 > height) {
            resetSpike(spike);
        }
    }

    // Drawing functions
    character.draw();
    for (const platform of platforms) {
        platform.moveLeftRight();
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
        //if it's not broken, char can land
        if (!platform.broken && isOnPlatform(character, platform)) {
            return platform;
        }
    }
    return null; //fall
}

function resetPlatform(platform) {
    //random x for platform (padding 60px)
    platform.x = random(60, width - 60 - platform.w);

    //get the starting point to find the highest
    let highestPY = platforms[0].y;
    for (const p of platforms) {
        //find the highest & ignore the one being reset
        if (p !== platform && p.y < highestPY) {
            highestPY = p.y;
        }
    }
    platform.y = highestPY - random(80, 120);

    //reset broken platform state
    platform.broken = false;
}

//check collision spikes
function checkSpikeCollision(character, spike) {
    //counting bounding box surround spike
    let leftRect = Math.min(spike.x1, spike.x2, spike.x3);
    let rightRect = Math.max(spike.x1, spike.x2, spike.x3);
    let topRect = Math.min(spike.y1, spike.y2, spike.y3);
    let bottomRect = Math.max(spike.y1, spike.y2, spike.y3);

    let hit =
        character.x + character.w > leftRect &&
        character.x < rightRect &&
        character.y + character.h > topRect &&
        character.y < bottomRect;

    return hit;
}

function resetSpike(spike) {
    let newX = random(40, width - 40);

    let highestY = 10;
    for (let spike of spikes) {
        if (spike !== spike && spike.y1 < highestY) {
            highestY = spike.y1;
        }
    }

    let newY = highestY - random(150, 250);

    spike.x1 = newX - 20;
    spike.y1 = newY;
    spike.x2 = newX;
    spike.y2 = newY - 40;
    spike.x3 = newX + 20;
    spike.y3 = newY;
}

function runGameBackground() {
    let bgColor = "#00000010";
    let strokeColor = "#00000015";

    //score
    push();
    fill("white");
    textStyle(BOLD);
    text("Score: " + score, 20, 30);
    pop();

    //instruction text
    push();
    textAlign(CENTER, CENTER);
    fill("#dbdbdbff");
    text(" ←  → \n arrow keys to move", width / 2, insTextY);
    pop();

    //background patterns
    push();
    strokeWeight(2);
    stroke(strokeColor);
    fill(bgColor);
    rect(20, 20, 200, 200);
    pop();

    push();
    strokeWeight(2);
    stroke(strokeColor);
    fill(bgColor);
    rect(20, 40 + 200, 200, 100);
    pop();

    push();
    strokeWeight(2);
    stroke(strokeColor);
    fill(bgColor);
    rect(40 + 200, 20, 200, 100);
    pop();

    push();
    strokeWeight(2);
    stroke(strokeColor);
    fill(bgColor);
    rect(20 + 200 + 20 + 200 + 20, 20, 200, 200);
    pop();

    push();
    strokeWeight(2);
    stroke(strokeColor);
    fill(bgColor);
    rect(20, 20 + 200 + 20 + 100 + 20, 200, 200);
    pop();

    push();
    strokeWeight(2);
    stroke(strokeColor);
    fill(bgColor);
    rect(40 + 200, 40 + 100, 200, 80);
    pop();

    push();
    strokeWeight(2);
    stroke(strokeColor);
    fill(bgColor);
    rect(40 + 200, 40 + 200, 200, 200);
    pop();

    push();
    strokeWeight(2);
    stroke(strokeColor);
    fill(bgColor);
    rect(40 + 200 + 200 + 20, 40 + 200, 200, 100);
    pop();

    push();
    strokeWeight(2);
    stroke(strokeColor);
    fill(bgColor);
    rect(40 + 200 + 200 + 20, 40 + 200 + 100 + 20, 200, 400);
    pop();

    push();
    strokeWeight(2);
    stroke(strokeColor);
    fill(bgColor);
    rect(40 + 200, 40 + 200 + 200 + 20, 90, 200);
    pop();

    push();
    strokeWeight(2);
    stroke(strokeColor);
    fill(bgColor);
    rect(40 + 200 + 100 + 10, 40 + 200 + 200 + 20, 90, 200);
    pop();
}

function resetGame() {
    character.x = 225;
    character.y = 400;
    platforms[0].x = 209;
    platforms[0].y = 450;

    for (let platform of platforms) {
        platform.x = platform.startX;
        platform.y = platform.startY;
        platform.broken = false;
    }

    for (let spike of spikes) {
        spike.y1 = spike.startY1;
        spike.y2 = spike.startY2;
        spike.y3 = spike.startY3;
    }

    score = 0;
    lastPlatform = null;
    floor.x = floor.startX;
    floor.y = floor.startY;
    insTextY = 488;

    gameState = "play";
}

function mouseClicked() {
    if (gameState === "start") {
        let process = startScreen.click(mouseX, mouseY);
        if (process === "play") {
            gameState = "play";
        }
    }

    if (gameState === "end") {
        let process = endScreen.click(mouseX, mouseY);
        if (process === "replay") {
            resetGame();
        }
        if (process === "quit") {
            resetGame();
            gameState = "start";
        }
    }
}
