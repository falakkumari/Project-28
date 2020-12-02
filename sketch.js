
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400, 680, 800, 20);
	boy1 = new boy(100, 600, 200, 250);
	tree1 = new tree(600, 500, 400, 400);
	stone1 = new stone(120, 600, 50, 50);
	mango1 = new mango(620, 420, 30, 30)
	chain = new slingshot(stone1.body, { x: 50, y: 550 });
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
	background(0);
	boy1.display();
	tree1.display();
	stone1.display();
	ground1.display();
	mango1.display();
	chain.display();
  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(stone1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
	chain.fly()
}

