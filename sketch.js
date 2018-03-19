

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(227);
    ellipseMode(CENTER);
    rectMode(CENTER);
    drawZoog(mouseX, mouseY);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function drawZoog(zoogX, zoogY) {
    // Body
    stroke(0);
    fill(150);
   // rect(240, 145, 20, 100);
    rect(zoogX, zoogY, 20, 100);
    
    // Head
    fill(255);
    ellipse(zoogX, zoogY-30, 60, 60);

    // Eyes
    fill(0);
    ellipse(zoogX-19, zoogY-30, 16, 32);
    ellipse(zoogX+19, zoogY-30, 16, 32);

    // Legs
    stroke(0);
    line(zoogX -10, zoogY +50, zoogX -20, zoogY+60);
    line(zoogX+10, zoogY+50, zoogX +20, zoogY+60);
}