var fixedRect, movingRect ;
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200,300,50,100);
  fixedRect = createSprite(400,200,100,50);
  movingRect.shapeColor = "green" ;
  fixedRect.shapeColor = "green" ;
}

function draw() {
  background("yellow");  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if (movingRect.x-fixedRect.x <= movingRect.width/2 + fixedRect.width/2
    && fixedRect.x-movingRect.x <= fixedRect.width/2 + movingRect.width/2
    && fixedRect.y-movingRect.y <= movingRect.height/2 + fixedRect.height/2
    && movingRect.y-fixedRect.y <= fixedRect.height/2 + movingRect.height/2) {
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
  } else  {
    movingRect.shapeColor = "green" ;
    fixedRect.shapeColor = "green" ;  
  }
  drawSprites();
}