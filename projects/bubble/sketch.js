let bubble;

function setup() {
  createCanvas(400, 400);

  bubble = new Bubble();
}

function draw() {
  background(0);

  bubble.update();
  bubble.show();
}
