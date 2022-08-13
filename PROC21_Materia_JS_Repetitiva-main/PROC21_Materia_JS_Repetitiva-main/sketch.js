
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var wall1;
var wall2;

function preload()
{
 	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,690,800,20)
	wall1 = new Ground(600,600,20,400)
	wall2 = new Ground(750,600,20,400)

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		desity:1.2
	}

	//crear los cuerpos aquí.
	ball = Bodies.circle(200,100,40,ball_options);
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
	background(51);
  drawSprites();
Engine.update(engine);
	rectMode(CENTER);
	ground.display();
	wall1.display();
	wall2.display();
	ellipse(ball.position.x,ball.position.y,40,40)
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(
			ball,ball.position,{
				x:0.08,y:-0.08
			}
		)
	}
}

