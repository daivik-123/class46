//creating variable
var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop,obsTop1,obsTop2;
var obstacleBottom,obsBottom1,obsBottom2,obsBottom3;
var topObstaclesGroup,bottomObstaclesGroup;

function preload(){
//loading images andanimations  
bgImg = loadImage("assets/bg.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
obsTop1 = loadImage("assets/obsTop1.png")
obsTop2 = loadImage("assets/obsTop2.png")
obsBottom1 = loadImage("assets/obsBottom1.png")
obsBottom2 = loadImage("assets/obsBottom2.png")
obsBottom3 = loadImage("assets/obsBottom3.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -10 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 1;
           Bar();
           spawnObstaclesTop();
           spawnObstaclesBottom();
            
        drawSprites();
        
}
//creating a function for spawning 2 obstacles at different x and y positions
function spawnObstaclesTop(){
  if(frameCount % 60 === 0) {
    var obstacleTop = createSprite(400,50,40,50); 
    obstacleTop.y=Math.round(random(10,100));   
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacleTop.addImage(obsTop1);
              break;
      case 2: obstacleTop.addImage(obsTop2);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacleTop.scale = 0.1;
    obstacleTop.velocityX=-4;
    obstacleTop.lifetime = 100;
    balloon.depth = balloon.depth+1;
    topObstaclesGroup.add(obstacleTop);
   
  }  
}
function spawnObstaclesBottom() 
{
  if(World.frameCount % 60 === 0) {
    obstacleBottom = createSprite(400,350,40,50);

obstacleBottom.addImage(obsBottom1);
obstacleBottom.debug=true


obstacleBottom.scale = 0.07;
obstacleBottom.velocityX = -4;



//generate random bottom obstacles

var rand = Math.round(random(1,3));
switch(rand) {
  case 1: obstacleBottom.addImage(obsBottom1);
          break;
  case 2: obstacleBottom.addImage(obsBottom2);
          break;
  case 3: obstacleBottom.addImage(obsBottom3);
          break;
  default: break;
} 
}
}

function Bar (){
if (frameCount % 60===0)  {
var bar = createSprite(400,200,10,800);
bar.velocityX=-6  ;
bar.depth = balloon.depth;
bar.lifetime=70;
bar.visible=false;
//barGroup.add(bar);
}
}