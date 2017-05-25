var ParticleSystem = function (position, angle) {
    this.angle = angle;
    this.origin = position.copy();
    this.particles = [];
};

ParticleSystem.prototype.addParticle = function () {
    var particle = new Particle(this.origin, this.angle);
    this.particles.push(particle);
    return particle;
};

ParticleSystem.prototype.run = function () {
    for (var i = this.particles.length - 1; i >= 0; i--) {
        var p = this.particles[i];
        p.run();
        if (p.isDead()) {
            this.particles.splice(i, 1);
        }
    }
};

ParticleSystem.prototype.update = function (origin, angle) {
    this.origin = origin;
    this.angle = angle;
}