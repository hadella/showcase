const total_fixed = 4000;
const total_stars = 3000;

let fixed_stars = [];

let stars = [];

let speed;

function setup() {
  createCanvas(windowWidth, windowHeight);

  colorMode(HSB);

  for (let i = 0; i < total_fixed; i++) {
    fixed_stars.push({ x: random(width), y: random(height) });
  }

  for (let i = 0; i < total_stars; i++) {
    stars.push(new Star(random(40, 255)));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  backdrop();
  translate(width / 2, height / 2);

  // Use touch position if available, otherwise mouse
  var input_x = touches.length > 0 ? touches[0].x : mouseX;
  speed = map(input_x, 0, width, 1, 50);
  speed = constrain(speed, 1, 50);

  for (let star of stars) {
    star.update();
    star.show();
  }
}

function touchStarted() {
  return false;
}

function touchMoved() {
  return false;
}

function backdrop() {
  background(0);

  for (let i = 0; i < total_stars; i++) {
    strokeWeight(0.5);
    // very slight twinkle
    stroke(0, 0, random(50, 75));
    point(fixed_stars[i].x, fixed_stars[i].y);
  }
}
