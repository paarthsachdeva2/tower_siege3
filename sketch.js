const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var polygonImage;
var slingShot1;
var ground1,ground2,ground3;
var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10,box11,box12;
var box13,box14,box15,box16,box17,box18;
var score;
var backgroundImg

var bg = "bg.png";

function preload(){
    polygonImage=loadImage("polygon.png");
    getBackgroundImg();
}

function setup(){

    createCanvas(900, 400);

	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
    
    ground1=new Ground(600,height,1200,20);
  
    stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  score=0;
 
  
  
  //console.log(block1);
  
  
  //level two
 
  box10 = new Box(330,260,30,40);
  box11= new Box(360,260,30,40);
  box12 = new Box(390,260,30,40);
  box13 = new Box(420,260,30,40);
  box14 = new Box(450,260,30,40);
  
  //level three
  box15 = new Box(360,220,30,40);
  box16 = new Box(390,220,30,40);
  box17 = new Box(420,220,30,40);
  //top
  box18 = new Box(390,210,30,40);



  //set 2 for second stand
  //level one
  box1 = new Box(640,175,30,40);
  box2 = new Box(670,175,30,40);
  box3 = new Box(700,175,30,40);
  box4 = new Box(730,175,30,40);
  box5 = new Box(760,175,30,40);
  //level two
  box6 = new Box(670,135,30,40);
  box7 = new Box(700,135,30,40);
  box8 = new Box(730,135,30,40);
  //top
  box9 = new Box(700,95,30,40);

  

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot1 = new SlingShot(this.ball,{x:100,y:200});

}
function draw(){

  if(backgroundImg)
        background(backgroundImg);
textSize(20);
fill("yellow");
text("score="+ score,770,20);
 
//Engine.update(engine);
//text(mouseX + ',' + mouseY, 10, 15);
textSize(20);
fill("lightyellow");
text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

ground1.display();
stand1.display();
stand2.display();
strokeWeight(2);
stroke(15);
fill("skyblue");
box1.display();
box1.score();
box2.display();
box2.score();
box3.display();
box3.score();
box4.display();
box4.score();
box5.display();
box5.score();
box6.display();
box6.score();
box7.display();
box7.score();
fill("pink");
box8.display();
box8.score();

box9.display();
box9.score();
box10.display();
box10.score();
box11.display();
box11.score();
box12.display();
box12.score();
fill("turquoise");
box13.display();
box13.score();
box14.display();
box14.score();
box15.display();
box15.score();
fill("grey");
box16.display();
box16.score();
fill("skyblue");
box17.display();
box17.score();
box18.display();
box18.score();

imageMode(CENTER)
image(polygonImage ,ball.position.x,ball.position.y,40,40);

slingShot1.display();

}

function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
slingShot1.fly();
}
 
function keyPressed(){
 
	if(keyCode===32){
		slingShot1.attach(this.ball);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1800){
      bg = "bg.png";
  }
  else{
      bg = "bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(datetime);

}
  


