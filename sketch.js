
var trex ,trex_running;
var ground,groundImage;
var invisibleGround;
function preload(){
  trex_running = loadAnimation ("trex1.png","trex3.png","trex4.png");

  groundImage = loadImage ("ground2.png");

}

function setup(){
  createCanvas(600,200);

  trex = createSprite(50,50,20,20);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(300,180,600,20);
  ground.addImage("ground",groundImage);
  ground.velocityX=-2;
    
  ground.x = ground.width/2;

  trex.debug=true;
  ground.debug=true;

  invisibleGround = createSprite(300,190,600,5);
  invisibleGround.visible = false;



}

function draw(){
  background(200);
  //console.count("draw Fucntion Called");

  //console.time();

  trex.collide(invisibleGround);
  
  if(keyDown("space")  && trex.y > 160){
    trex.velocityY = -9;
  }
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }

  //gravity to trex
  trex.velocityY += 0.5;

  drawSprites();
  console.warn("Warning Message")
  console.error("Error Message")
  console.info("Info Message")
 // console.timeEnd();
}
