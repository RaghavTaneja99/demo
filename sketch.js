var starImg, fairyImg, bgImg,star_option,back
var fairy , fairyVoice;
var star, starBody;
var STAND,FELL,speaker

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	speaker=loadSound("JoyMusic.mp3")

}

function setup() {
	createCanvas(800, 750);
	back=createSprite(400,400,10,10)
  back.addImage(bgImg)

	

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	

	engine = Engine.create();
	world = engine.world;
star_option={
	restitution:1, isStatic:false
}

	starBody = Bodies.circle(650 , 30 , 5 ,star_option);
	World.add(world, starBody);
	
	
	

}


function draw() {

	background("red");
Engine.update(engine)
	
	
  
  
  keyPressed();
  star = createSprite(starBody.position.x,starBody.position.y,10,10);
	star.addImage(starImg);
	star.scale = 0.2;
	star.collide(fairy);
	
if(starBody.y===800){
	starBody.position.y=10
}
speaker.play()
  star.collide(fairy);

  drawSprites();

  fairy.setCollider("rectangle",450,20,200,10);

}

function keyPressed() {
	
	if(keyDown("left")){
		fairy.x = fairy.x - 5;
	}

	if(keyDown("right")){
		fairy.x = fairy.x + 5;
	}

	
}


