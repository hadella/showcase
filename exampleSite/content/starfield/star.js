class Star {
  constructor(alpha) {
    this.alpha = alpha;

    this.reset();
  }

  update() {
    this.z -= speed;

    if (this.z < 1) {
      this.reset();
    }
  }

  reset() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
  }

  show() {
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);

    let px = map(this.x / this.pz, 0, 1, 0, width);
    let py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    // What is the distance between the start and end position?
    let d = dist(px, py, sx, sy);

    // When `d` is too small there are a number of noticeable "pops" which is jarring. We will
    // look at the distance to see whether or not to display the star streak.
    if (d > 1 && d < 10) {
      const steps = 4;

      let dx = (sx - px) / steps;
      let dy = (sy - py) / steps;

      for (let i = 0; i < steps; i++) {
        let brightness = map(i, 0, steps, 0, 255);
        let alpha = map(i, 0, steps, this.alpha, 0);

        stroke(brightness, alpha);
        line(px, py, sx - dx * i, sy - dy * i);
      }
    } else if (d > 10) {
      const steps = 16;

      let dx = (sx - px) / steps;
      let dy = (sy - py) / steps;

      for (let i = 0; i < steps; i++) {
        let hue = map(i, 0, steps, 0, 255);
        let alpha = map(i, 0, steps, 0, this.alpha);
        let saturation = map(i, 0, steps, 10, 255);

        stroke(hue, saturation, 255, alpha);
        line(px, py, sx - dx * i, sy - dy * i);
      }
    }
  }
}
