class Mover {
	constructor(x, y, mass, color = 255) {
		this.pos = createVector(x, y);
		this.vel = createVector();
		this.acc = createVector();
		this.mass = mass;
		this.r = sqrt(this.mass) * 10;
		this.color = color;
	}

	apply_force(force) {
		let f = p5.Vector.div(force, this.mass);
		this.acc.add(f);
	}

	edges() {
		if (this.pos.y >= height - this.r) {
			this.pos.y = height - this.r;
			this.vel.y *= -1.0;
		}

		if (this.pos.x >= width - this.r) {
			this.pos.x = width - this.r;
			this.vel.x *= -1;
		} else if (this.pos.x <= this.r) {
			this.pos.x = this.r;
			this.vel.x *= -1;
		}
	}

	friction() {
		let diff = height - (this.pos.y + this.r);
		if (diff < 1) {
			// Calc direction
			let friction = this.vel.copy();
			friction.normalize();
			friction.mult(-1);

			// Calc magnitude
			let normal = this.mass;
			friction.setMag(mu * normal); // mu is global

			this.apply_force(friction);
		}
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);

		this.acc.set(0, 0);
	}

	show() {
		noStroke();
		fill(this.color);
		circle(this.pos.x, this.pos.y, 2 * this.r);
	}
}
