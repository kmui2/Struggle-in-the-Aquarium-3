var size;
var r;
var cX;
var cY;
var particleS;
var time = 0;
var chargeTime = 25;
//var chargeTime = 0;
var shootTime = -chargeTime;
var eatTime = 0;
var shooter;
var score = 10;
var enemeyScore = 10;
var img;
var bk;

var numStars = 5;
var starSpawnTime = 100;

var numFood = 2;
var foodSpawnTime = 300;

var stars = [];
var food;

var level;
var levels = [];
var levelNum = 1;
var maxLevelNum = 1;

//[particle, index of enemy]
var particles = [];

var music;
var levelup;
var killSound;
var hitSound;
var eatSound;

function preload() {
  music = loadSound('funky.mp3');
    levelup = loadSound('levelup.wav');
    killSound = loadSound('kill.wav');
    hitSound = loadSound('hit.wav');
    eatSound = loadSound('eat.wav');
}

function setup() {
    createCanvas(640*1.25, 480*1.25);
    size = 10;
    angle = 0;
    cX = width / 2;
    cY = (height - size * sqrt(3));
    
    music.setVolume(0.1);
    music.play();   
    
    img = loadImage("fish.png");  // Load the image
    open = loadImage("openFish.png");
    bk = loadImage("background.png");
    
    shooter = new Shooter(cX, cY, size, angle);
    particleS = new ParticleSystem(createVector(0,0), angle);
    stars.push(loadImage("purple.png"));
    stars.push(loadImage("blue.png"));
    food = loadImage("food.png");
    level = new Level(1);
}

function draw() {
    background(bk);

    //Controls changes position of shooter
    controls(particleS);
    
    if (score >=0)  
    level.run();
    
    if (level.won()){
        levelNum++;
        levelup.play();
        level = new Level(levelNum);
    }
    
    if (score <= 0) {
        push();
        translate(0, 100);
        textSize(100);
        fill(100, 100, 100);
        text("Game Over \n (Click to Restart)", 10, 30);
        pop();
    }
    
    //Incremen"t time
    time++;
}

function mousePressed() {
    music.playMode('restart');
    music.play();
    levelNum = 1;
    level = new Level(levelNum);
    angle = 0;
    cX = width / 2;
    cY = (height - size * sqrt(3));
}
