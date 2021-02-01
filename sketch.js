const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, superhero, monster, rope;
var bg;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;

function preload() {
//preload the images here
bg = loadImage("image/GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(400,600,1200,15);

  superhero = new Hero(400,250,200,200);
  monster = new Monster(950,400,200,200)
  rope = new Fly(superhero.body,{x:300,y:50});
  b1 = new Box(800,100,70,70)
    b2 = new Box(800,100,70,70)
    b3 = new Box(800,100,70,70)
    b4 = new Box(800,100,70,70)
    b5 = new Box(800,100,70,70)
    b6 = new Box(800,100,70,70)
    b7 = new Box(700,100,70,70)
    b8 = new Box(700,100,70,70)
    b9 = new Box(700,100,70,70)
    b10 = new Box(700,100,70,70)
    b11 = new Box(700,100,70,70)
    b12 = new Box(700,100,70,70)
    b13 = new Box(600,100,70,70)
    b14 = new Box(600,100,70,70)
    b15 = new Box(600,100,70,70)
    b16 = new Box(600,100,70,70)
    b17 = new Box(600,100,70,70)
    b18 = new Box(600,100,70,70)
    b19 = new Box(600,100,70,70)
    b20 = new Box(600,100,70,70)

}

function draw() {
  Engine.update(engine);
  background(bg);


  ground.display();
  superhero.display();
  monster.display();
  rope.display();
  b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body, {x: mouseX , y: mouseY});
}

