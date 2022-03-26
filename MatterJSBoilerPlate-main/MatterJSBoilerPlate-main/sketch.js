
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,groundObj,leftSide,rightSide;
//var world;

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);
	
	var ball_opition={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball.Bodies.circle(100,100,20,20,ball_opition);
    World.add(world,ball);
	Engine.run(engine);
  
}
groundObj=new ground(width/2,670,width,20);
leftSide=new ground(1100,600,20,120);
rightSide=new ground(1350,600,20,120);

Engine.run(engine);

function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,radius,radius);

  groundObj.display();
  leftSide.display();  
  rightSide.display();

  drawSprites();
 
}

function keypressed(){
	if (keycode === UP_ARROW){

         Matter.Body.applyForce(ball,ball.position,{x:60,y:60});

	}
}

