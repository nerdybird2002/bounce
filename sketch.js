//comment out background to have a trail
let r = 0;
let g = 150;
let b = 100;
let size = 60;
let x = size/2;
let y = size/2;
let ballSpeedX = 5;
let ballSpeedY = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(0, 200);
  b = random(0, 255);
  noStroke()
}

function draw() {
  //background(r, g, b);
  circle(x, y, size);
  console.log("x");
  circle(random(width), random(height),random(0,100))

  x = x + ballSpeedX;
  y = y + ballSpeedY;

  if (x > width-size/2 || x < size/2) {
    ballSpeedX = ballSpeedX *-1;
    fill(random(255),random(255),random(255),random(255))
    
  }

  if (y > height-size/2|| y < size/2) {
    ballSpeedY = ballSpeedY * -1;
    fill(random(255), random(255), random(255),random(255))
  }
}
