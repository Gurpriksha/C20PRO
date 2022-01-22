var ball, ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

function setup()
{
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

 var ballprop = {
  restitution: 1,
  frictionAir: 0.01
 }
  

  ball = Bodies.circle(200,100,10, ballprop);
  World.add(world, ball);

 var groundprop = {
   isStatic: true
  }

  ground = Bodies.rectangle(100, 380, 400, 100, groundprop);
  World.add(world, ground);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background("cyan");
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 50);

  rect(ground.position.x, ground.position.y, 400, 10);
 
}

