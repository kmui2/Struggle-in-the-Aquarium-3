var Animal = function (x, y, radius, index) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.radius = radius;
    this.lifespan = 500.0;
    this.r1 = random(150,255);
    this.r2 = random(150,255);
    this.life = 3;
    this.timeHit = 0;
    this.angle = 0;
    this.particleS = new ParticleSystem(this.position, this.angle);
    this.chargeTime = 100;
    this.shootTime = random(100);
    this.index = index;
}

Animal.prototype.run = function () {
    this.update();
    this.display();
}

Animal.prototype.update = function () {
    this.velocity.add(this.acceleratiobn);
    this.position.add(this.velocity);
    this.lifespan -= 2;
//    var diff = this.position.copy();
//    diff.sub(createVector(cX, cY));
//    
//    var diffX = cX-this.position.x;
//    var diffY = cY-this.position.y;
    
//    this.angle = atan(diffY/diffX);
    
    this.angle = random(2*PI);
}

Animal.prototype.display = function () {
    push();
    stroke(200, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
//    tint(0, this.r1, this.r2);  // Tint blue
    if (this.life > 1)
        image(stars[1], this.position.x - this.radius, this.position.y - this.radius, this.radius * 2, this.radius * 2);
    else {
        if (time < 100 + this.timeHit && time % 10 != 0) {
            image(stars[1], this.position.x - this.radius, this.position.y - this.radius, this.radius * 2, this.radius * 2);
        }
        else if (this.life != 0){
            image(stars[0], this.position.x - this.radius, this.position.y - this.radius, this.radius * 2, this.radius * 2);
        }
        else {
                push();
                scale(2,2);
                image(stars[0], this.position.x - this.radius, this.position.y - this.radius, this.radius * 2, this.radius * 2);
                pop();
        }
        
    }
    pop();
    
//     if (time - this.shootTime > this.chargeTime) {
     if (random() < 0.05) {
//     if (random() < 0.2) {
        this.shootTime = time;
        var particle = this.particleS.addParticle();
//         particles.push([particle, this.index]);
         
    }
    
        //PARTICLES
        this.particleS.update(this.position, this.angle-PI/2);
        this.particleS.run();
}
Animal.prototype.isDead = function (system) {
    for (particle of system.particles) {
        var tempPos = particle.position.copy();

        var tempDist = dist(tempPos.x, tempPos.y, this.position.x, this.position.y);

        if (tempDist <= this.radius*2 && this.life > 0) {
            killSound.play();
            particle.lifespan = 0;
            this.life--;
            this.timeHit = time;
        }
        
        if (this.life <= 0) {
            score+=2;
            return true;
        }
//        if (this.lifespan < 0) {
//            return true;
//        }
    }


    return false;
}
