
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;
function preload()
{
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
	//b = createSprite(100,350,20,20);
	//b.addImage("b",boy);
	stone = new Stone(40,480);
	s1 = new Launcher(stone,{x:40,y:480});

	m1 = new Mangoes(800,300); 
	m2 = new Mangoes(720,250);
	m3 = new Mangoes(835,290);
	m4 = new Mangoes(900,260);
	m5 = new Mangoes(650,170);
	m6 = new Mangoes(670,400);
	m7 = new Mangoes(550,320);
	m8 = new Mangoes(890,360);
	m9 = new Mangoes(620,300);
	m10 = new Mangoes(770,200);
	//Create the Bodies Here.
     tre = new Tree(650,350);
     ground = new Ground(width/2,690,width,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tre.display();
  ground.display();
 m1.display();
 m2.display();
 m3.display();
 m4.display();
 m5.display();
 m6.display();
 m7.display();
 m8.display();
 m9.display();
 m10.display();

 
  image(boy,100,600,200,500);
  stone.display();
  s1.display();
 // drawSprites();
 
}



