// A simple Particle class
var Particle = function (position, angle, index) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(10 * cos(angle), 10 * sin(angle));
    this.position = position.copy();
    this.lifespan = 100.0;
    this.dead = false;
    this.index = index || -1;
};

Particle.prototype.run = function () {
    this.update();
    this.display();
};

// Method to update position
Particle.prototype.update = function () {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    if (this.position.x < 0 || this.position.x > width) 
        this.velocity.x = -this.velocity.x;
    if (this.position.y < 0 || this.position.y > height) 
        this.velocity.y = -this.velocity.y;
    this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function () {
    push();
    stroke(200, this.lifespan);
    strokeWeight(2);
    fill(255,255,0, this.lifespan*2);
    ellipse(this.position.x, this.position.y, 12, 12);
    pop();
};

// Is the particle still useful?
Particle.prototype.isDead = function () {
    if (this.lifespan < 0) {
        return true;
    } 
    else {
        return false;
    }
};

