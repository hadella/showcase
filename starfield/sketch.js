const total_fixed = 4000;
const total_stars = 3000;

let fixed_stars = [];

let stars = [];

let speed;

function setup() {
  createCanvas(800, 600);

  colorMode(HSB);

  for (let i = 0; i < total_fixed; i++) {
    fixed_stars.push({ x: random(width), y: random(height) });
  }

  for (let i = 0; i < total_stars; i++) {
    stars.push(new Star(random(40, 255)));
  }

  // createP("Move the mouse right to increase or left to decrease speed");
}

function draw() {
  backdrop();

  translate(width / 2, height / 2);

  speed = map(mouseX, 0, width, 1, 50);

  // We only want to move forward
  speed = constrain(speed, 1, 50);

  for (let star of stars) {
    star.update();
    star.show();
  }
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
