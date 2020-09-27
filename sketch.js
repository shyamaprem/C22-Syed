
//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  
  engine = Engine.create();
  world = engine.world;
 
  var options = { 
    isStatic : true  
  }
  box = Bodies.rectangle(200,390, 400,20, options);

  World.add(world, box);

 }

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  fill("brown");
  rectMode(CENTER);
  rect(box.position.x,box.position.y,400,20);
  //drawSprites();
}


