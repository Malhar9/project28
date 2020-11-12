
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var m1,m2,m3,m4,m5
var boy
var tree
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	boy = new Boy (150,305,100,100);
	tree = new Tree (810,220,150,150)
	m1= new Mango (700,200,50,50)
	m2= new Mango (750,250,50,50)
	m3= new Mango (800,300,50,50)
	m4= new Mango (850,350,50,50)
	m5= new Mango (900,400,50,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  detectCollision(stone,m1)
  detectCollision(stone,m2)
  detectCollision(stone,m3)
  detectCollision(stone,m4)
  detectCollision(stone,m5)
  boy.display();
  tree.display();
  m1.display();
  m2.display();
  m3.display();

  m4.display();
  m5.display();
  

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Boy.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:235,y:420})
  }
}
function detectCollision(stone,m1,m2,m3,m4,m5){
  m1BodyPosition=m1.body.setPosition
  m2BodyPosition=m2.body.setPosition
  m3BodyPosition=m3.body.setPosition
  m4BodyPosition=m4.body.setPosition
  m5BodyPosition=m5.body.setPosition
  stoneBodyPosition=stone.body.setPosition
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,m1BodyPosition.x,m1BodyPosition.y,
    m2BodyPosition.x,m2BodyPosition.y,m3BodyPosition.x,m3BodyPosition.y,m4BodyPosition.x,m4BodyPosition.y,m5BodyPosition.x,m5BodyPosition.y )
  if(distance<=m1.r+stone.r||distance<=m2.r+stone.r||distance<=m3.r+stone.r||distance<=m4.r+stone.r||distance<=m5.r+stone.r){
    Matter.Body .setStatic (Mango.body=false)
  }
  }
