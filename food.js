var Food = function (x, y, radius) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.radius = radius;
    this.lifespan = 500.0;
    this.r1 = random(150,255);
    this.r2 = random(150,255);
}

Food.prototype.run = function () {
    this.update();
    this.display();
}

Food.prototype.update = function () {
    this.velocity.add(this.acceleratiobn);
    this.position.add(this.velocity);
    this.lifespan -= 2;
}

Food.prototype.display = function () {
    push();
    stroke(200, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
//    tint(0, this.r1, this.r2);  // Tint blue
    image(food, this.position.x, this.position.y, this.radius * 2, this.radius * 2);
    pop();
}
Food.prototype.isDead = function (system) {
//    for (particle of system.particles) {
//        var tempPos = particle.position.copy();
//
//        var tempDist = dist(tempPos.x, tempPos.y, this.position.x, this.position.y);
//
//        if (tempDist <= this.radius*2) {
//            score+=5;
//            return true;
//        }
////        if (this.lifespan < 0) {
////            return true;
////        }
//    }
    
    var tempDist = dist(cX, cY, this.position.x, this.position.y);

    if (tempDist <= this.radius*4) {
        eatSound.play();
        score+=5;
        eatTime = time;
        return true;
    }
//        if (this.lifespan < 0) {
//            return true;
//        }
    return false;
}
