const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
function setup() {
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
 world = engine.world;

 object = Bodies.rectangle(200,100,50,50);
 World.add(world,object);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
  drawSprites();
}