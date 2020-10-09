

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world; 
var ground;
var ball;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  var options = { isStatic: true }
  var ball_options = {
restitution:1.5
  }
  
  ground = Bodies.rectangle(200, 390, 400, 19.5, options);
  World.add(world, ground);
  console.log(ground);
  ball=Bodies.circle(200,200,21,ball_options)
  
  World.add(world, ball);
  console.log(ground.position.x);
  console.log(ground.position.y);
} 
function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 15);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20.5,20.5)
}