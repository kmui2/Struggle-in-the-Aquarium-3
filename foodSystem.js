var FoodSystem = function () {
    this.foods = [];
}

FoodSystem.prototype.addFood = function () {
    var pos = createVector (random(50, width - 50), random(50, height - 50));
    this.foods.push(new Food(pos.x, pos.y, 10));
}

FoodSystem.prototype.run = function (system) {
    for (var i = 0; i < this.foods.length; i++) {
        this.foods[i].run();
        
        
        if (this.foods[i].isDead(system)) {
            
            
            this.foods.splice(i, 1);
        }
        
    }
}

FoodSystem.prototype.update = function () {
    
}