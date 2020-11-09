const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbin1, paperObject,groundObject;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);
		
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	stone = new Stone(140,440,20)
	
	tree = new Tree(1050,340,450,500)
	mango1 = new Mango(1000,150,30)
	mango2 = new Mango(1170,180,30)
	mango3 = new Mango(1010,260,30)
	ground = new Ground(width/2,600,width,20)
	boy = new Boy(200,510,200,300)
    chain = new Chain(stone.body,{x:138,y:440})
	
	 
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("white");
 
 
  boy.display();
  ground.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  chain.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3)

}

function mouseDragged()
{ 
	Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY}); 
} 
function mouseReleased()
{ 
	chain.fly(); 
} 
function keyPressed()
{
	if(keyCode === 32)
	{ 
		Matter.Body.setPosition(stone.body,{x:140, y:440}); 
		chain.attach(stone.body); 
	}

}

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	  if(distance<-lmango.r+lstone.r)
	  {
		  Matter.Body.setStatic(lmango.body,false);
	  }
}
