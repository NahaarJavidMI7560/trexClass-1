
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  var trex = createSprite(50,460,20,50);
trex.addAnimation("running",trex_running);
  //create a trex sprite
 
}

function draw(){
  background("white")
  if(keyDown("space")){
    trex.velocityY = -1
  }
  drawSprites()

}
