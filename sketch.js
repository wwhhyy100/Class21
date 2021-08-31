const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var left;
var right;
var ball_options;
var bttn1;
var bttn2;

function preload(){

 ball_options={

	isStatic:false,
	restitution:0.5,
	friction:0,
	density:1.2
}

bttn1 = createImg("right.png");
bttn1.position(220,30);
bttn1.size(50,50);
bttn1.mouseClicked(hForce);

bttn2 = createImg("up.png");
bttn2.position(100,30);
bttn2.size(50,50);
bttn2.mouseClicked(vForce);
	
}

function setup() {
	createCanvas(1280,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,12,ball_options);
	World.add(world,ball)

	groundObj = new ground(650,550,1300,20);
	left = new ground(650,480,20,120);
	right = new ground(780,480,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
//  function keyPressed() {
	//if (keyCode===UP_ARROW){
	//	Matter.Body.setAngularVelocity(ball,velocityX = 0.5)
	//}
  //}
  
  
  ellipse(ball.position.x,ball.position.y,12)

  groundObj.display();
  left.display();
  right.display();
  drawSprites();
 
}


function hForce(){
//The first argument is the body, second is the x and y position, third is the dirsction of the force
	 Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0})
  }
  
  function vForce(){
	//The first argument is the body, second is the x and y position, third is the dirsection of the force
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.01})
  
  }