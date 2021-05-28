var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 carAnimation=loadAnimation("images/car1.png");
 carAnimation2=loadAnimation("images/car2.png");
 playerAnimation=loadanimation("images/player-03.png");
logAnimation=loadAnimation("images/log2.png");
}
function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
    
 }

function draw() {
  background("skyblue");
 translate(0,-player.spt.y+height-150);
  drawSprites();
}

 for( i=0;i<6;i++){
   var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
   if(i%2===0)
   {
var road = createSprite(683,height-150-(i*400)-grassHeight,width,300)
   road.shapeColor="Black";   
}
  bottomGrass1.shapeColor=" grey";}

   for(vari=0;i<40;i++){
     cars=new cars(2);
     carGroup1.add(cars.spt);
   }


 for(i=1;i<logGroup1.length;i++){
if(logGroup[1].x<0)
{
  logGroup1[1].x=width;
}}


for(i=1;i<carGroup1.length;i++){
  if(carGroup[1].x<0)
  {
    carGroup1[1].x=width;
  }}

  functionkeyPressed()
  {
    if(keyCode==UP_ARROW){
      player.move(0,-2);
    }else if(keyCode==DOWN_ARROW){
      player.move(0,2)
    }else if(keyCode==LEFT_ARROW){
      player.move(-2,0)
    }else if(keyCode==RIGHT_ARROW){
      player.move(2,0)

  }}
   
  if(carGroup.isTouching(player.spt)){
    player.spt.x = width/2
    player.spt.y = height-75;
  }

  if(logGroup1.isouching(player.spt)){
    player.spt.x=player.spt.x-3
  }
  else if (player.spt.y > height-1550 && player.spt.y < height-1300) 
          (player.spt.y < height-500 && player.spt.y>height-850 ) ||
          (player.spt.x<0)||
          (player.spt.x>width)
          {
            player.spt.x=width/2;
            player.spt.y=height-75;
          }

          