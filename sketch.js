
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var engine,world 
function preload()
{
	
}


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,650,1200,20)
	b1 = new Ground(900,590,40,100)
	b2 = new Ground(600,590,40,100)
	
  ball_options ={
    isStatic: false,
    restitution: 0.3,
    density: 1.2,
  }
  ball = Bodies.circle(200,600,25,ball_options)
  World.add(world,ball)
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);

  fill("yellow")

  ellipse(ball.position.x,ball.position.y,25,25)

  ground.display()
  b1.display()
  b2.display()

}

function keyPressed() {
  if(keyCode===RIGHT_ARROW) {
    Matter.Body.applyForce(ball,ball.position,{x:80,y:-80})
  }
}




