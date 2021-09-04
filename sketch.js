
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock
var wall
var wall2
var wall3


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  

  ellipseMode(RADIUS);
  
  var ground_options = {
  isStatic: true
  }
  
  ground = Bodies.rectangle(200,380,400,20, ground_options)
  World.add(world,ground)
  rectMode(CENTER)
  
  var rock_options = {
  restitution: 0.85
  }

  rock = Bodies.circle(300,20,10, rock_options)
  World.add(world,rock)



  wall = Bodies.rectangle(350,300,20,400,ground_options)
  World.add(world,wall)

  wall2 = Bodies.rectangle(200,300,20,400,ground_options)
  World.add(world,wall)

  wall3 = Bodies.rectangle(50,300,20,400,ground_options)
  World.add(world,wall)
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x, ground.position.y,400,20)
  ellipse(rock.position.x,ball.position.y,10);
  rect(wall.position.x, wall.position.y,20,400)
  rect(wall2.position.x, wall.position.y,20,400)
  rect(wall3.position.x, wall.position.y,20,400)


  
  
}