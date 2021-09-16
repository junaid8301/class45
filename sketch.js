function setup() {
  createCanvas(displayWidth,displayHeight);
  ground1 = createSprite(displayWidth/2,displayHeight-30,displayWidth , 40);
  ground2 = createSprite(displayWidth*2,displayHeight-30,displayWidth+displayWidth/2 , 40);
  ground1.velocityX = -5;
  ground2.velocityX = -5;
  player = createSprite(80,displayHeight-100,40,40);


}

function draw() {
  background("pink");  
  ground1.shapeColor = "black";
  player.velocityY += 1
  player.collide(ground1);

  if(ground2.x<0){
    ground1.x = displayWidth
  }
  



  drawSprites();

}

function keyPressed(){
  if(keyCode===32){
    player.velocityY = -20;
  }
}