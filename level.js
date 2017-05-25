var Level = function(level) {
    this.level = level;
    this.numStars = 1 + level;
    this.animalS = new AnimalSystem();
    this.foodS = new FoodSystem();
    this.allSpawned = false;
    score = 10;
}

Level.prototype.run = function() {
    //animals   

    //Display Shooter
    shooter.update(this.animalS.animals);
    
    //PARTICLES
    particleS.update(createVector(cX, cY), angle-PI/2);
    particleS.run();
    
    
    while (this.animalS.animals.length < this.numStars && !this.allSpawned)
        this.animalS.addAnimal();
    
    this.allSpawned = true;
    this.animalS.update();
    this.animalS.run(particleS);
    
    
    //food   
    if(time % foodSpawnTime == 0)
        this.foodS.addFood();
    this.foodS.update();
    this.foodS.run(particleS);
    
    push();
    //score
    scale(1,1.5);
    rect(0, 0, 200, 32, 20);
    pop();
    push();
    if (score <= 3) {
        fill(153, 0, 0);
        textSize(50);
        translate(0, 10);
    }
    else {
        fill(0, 0, 0);
        textSize(32);
    }
    text("Hero " + score + "", 10, 32);
    pop();
    
    //level number
    rect(width - 200, 0, width + 100, 32, 20);
    push();
    translate(width-200, 0);
    textSize(32);
    text("Level " + this.level + "", 10, 30);
    pop();  
}

Level.prototype.won = function() {
    return this.animalS.numDead == this.numStars;
}