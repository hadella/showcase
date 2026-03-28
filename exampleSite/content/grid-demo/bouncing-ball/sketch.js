let x, dx;
let y, dy;
let r;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width / 2;
  dx = 3;

  y = height / 2;
  dy = 2;

  r = 20;
}

function draw() {
  background(0);

  ellipse(x, y, 2 * r, 2 * r);

  x += dx;
  y += dy;

  if (x >= width - r || x <= r) dx = -dx;
  if (y >= height - r || y <= r) dy = -dy;
}
