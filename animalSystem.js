var AnimalSystem = function () {
    this.animals = [];
    this.numDead = 0;
}

AnimalSystem.prototype.addAnimal = function () {
    var pos = createVector (random(50, width - 50), random(50, height - 50));
    this.animals.push(new Animal(pos.x, pos.y, 25, this.animals.length));
}

AnimalSystem.prototype.run = function (system) {
    for (var i = 0; i < this.animals.length; i++) {
        this.animals[i].run();
        
        
        if (this.animals[i].isDead(system)) {
            
            
            this.animals.splice(i, 1);
            this.numDead++;
        }
        
    }
}

AnimalSystem.prototype.update = function () {
    
}
