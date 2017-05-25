function controls(system) {
    var rSpeed = 0.1;

    //rotate left
    if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
        angle -= rSpeed;
    }
    //rotate right
    if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
        angle += rSpeed;
    }
    //up W
    if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
        cY -= 5 * sin(angle + PI / 2);
        cX -= 5 * cos(angle + PI / 2);
    }
    //down S
    if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
        cY += 5 * sin(angle + PI / 2);
        cX += 5 * cos(angle + PI / 2);
    }
    //space
    if (keyIsDown(32) && time - shootTime > chargeTime) {
        shootTime = time;
        system.addParticle();
    }
}