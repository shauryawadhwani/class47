var bg,bgImg;
var player,playerImage;
var shark, sharkImage;
var obstacleImage1,obstacleImage2,obstacleImage3
var obstaclesGroup
function preload(){
  
  
  bgImg = loadImage("assets/bgImage.png")
playerImage=loadImage('assets/playerImg.png')
sharkImage=loadImage('assets/sharkImg.png')
obstacleImage1=loadImage('assets/obstacle1.png')
obstacleImage2=loadImage('assets/obstacle2.png')
obstacleImage3=loadImage('assets/obstacle3.png')
}

function setup() {

  
  createCanvas(displayWidth,displayHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 0.7
  bg.velocityX=-7

//creating the player sprite
player = createSprite(displayWidth-700, displayHeight-300, 50, 50);
 player.addImage(playerImage)
 //  player.scale = 0.3
 //  player.debug = true
  // player.setCollider("rectangle",0,0,300,300)
  shark = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  shark.addImage(sharkImage)
shark.scale=0.45

obstaclesGroup=new Group()
}

function draw() {
  background(0); 
if(bg.x<0){
  bg.x=bg.width/2
  

}



  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
player.y = player.y+30
}


if(obstaclesGroup.isTouching(player)){
  
}
 



spwanObstacles()
drawSprites();

}
function spwanObstacles(){
if(frameCount % 60 === 0) {
var obstacle = createSprite(random(500,1100),random(100,500),40,40)
obstacle.velocityX=-5
obstacle.scale=0.7
var rand =Math.round(random(1,3));
switch(rand) {
case 1: obstacle.addImage(obstacleImage1);
break;
case 2: obstacle.addImage(obstacleImage2);
break;
case 3: obstacle.addImage(obstacleImage3);
break;
default:break
  }
obstacle.depth = player.depth;
player.depth = player.depth + 1;
obstacle.depth = shark.depth;
shark.depth = shark.depth + 1;
obstaclesGroup.add(obstacle)
 }
}