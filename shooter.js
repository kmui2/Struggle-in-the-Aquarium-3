var Shooter = function (cX, cY, size, angle) {
    this.cX = cX;
    this.cY = cY;
    this.size = size;
    this.angle = angle;
    this.position = createVector(cX, cY);
    this.timeHit = 0;
};

Shooter.prototype.draw = function() {
    
    if (time > 100 + this.timeHit || time % 10 != 0) {
            
//        push();
//        translate(this.cX, this.cY);
//        scale(this.size, this.size);
//        rotate(this.angle);
//        ellipse(0,-1.5*sqrt(3),0.2,0.2);
//    //    triangle(-1,0,0,-sqrt(3),1,0);
//        pop();
        
        push();
        translate(this.cX, this.cY);
        rotate(this.angle-PI/2+0.2);
        scale(this.size/75, this.size/75);
        if (time < 100 + eatTime){
            push();
            scale(1.5,1.5);
            image(open, -open.width/2, -open.height/2);
            pop();
        }
        else
            image(img, -img.width/2, -img.height/2);
        pop();
        
    }
}

Shooter.prototype.update = function(animals) {
    this.cX = cX;
    this.cY = cY;
    this.angle = angle;
    this.position = createVector(cX, cY);
    this.draw();
    
    if(this.isHit(animals)){
        score -=2;
    }
    
    
//    for (particle of particles) {
//        var tempPos = particle.position.copy();
//
//        var tempDist = dist(tempPos.x, tempPos.y, this.position.x, this.position.y);
//
////        console.log(tempDist);
//        if (tempDist <= this.size*100) {
//            particle.lifespan = 0;
//            score -=2;
//        }
//    }
};
Shooter.prototype.isHit = function (animals) {
    for (animal of animals){
        var system = animal.particleS;
        for (particle of system.particles) {
            var tempPos = particle.position.copy();

            var tempDist = dist(tempPos.x, tempPos.y, this.position.x, this.position.y);
            
//            console.log(this.size +"");

            if (tempDist <= this.size*5) {
                hitSound.play();
                particle.lifespan = 0;
                this.timeHit = time;
                return true;
            }

    //        if (this.lifespan < 0) {
    //            return true;
    //        }
        }
    }

    return false;
}