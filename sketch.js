// Renaming a module of a library is called NameSpacing
//Engine, World,Bodies,Body etc are modules of Matter.js library
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;


var engine,ground,ball;

function setup() {
  createCanvas(800,400);

  // Creating an engine for our application to make the simulations , using Engine module
  engine = Engine.create();

  // Whenever an engine is created, a world is created.
  world  = engine.world;
 
  // JSON - Java script object notation
  // its enclosed in flower braces, with key : value pairs seperated by commas

  var options = {
    isStatic :true
  }

  // Creating bodies using Bodies module
  ground = Bodies.rectangle(400,380,800,20,options);

  // Adding the body to the world we created in our application
  World.add(world,ground);
 
  console.log(ground);

  var ball_options={
    restitution:2

  }
  ball = Bodies.circle(400,100,20,ball_options);
  World.add(world, ball);
  console.log(ball);



  
}

function draw() {
  background("lightgreen");  

  //Updating the engine to take the simulation forward
  Engine.update(engine);

  //console.log(ground.position.x, ground.position.y)
  
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y,800,20);
  
  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 40,40)
  
}