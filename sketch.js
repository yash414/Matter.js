const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld, mybody;

function setup() {
  createCanvas(400,400);
  myengine = Engine.create();
  myworld = myengine.world;
  var mybody_options = {
    restitution: 2
  }
  mybody = Bodies.circle(200,200,20,mybody_options);
  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(myworld,mybody);
  World.add(myworld,ground);
}

function draw() {
  background(0);
  Engine.update(myengine);
  ellipseMode(RADIUS);
  ellipse(mybody.position.x,mybody.position.y,20,20);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
}