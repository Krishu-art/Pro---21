var fixedrect, movingrect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  movingrect = createSprite(400,200,80,30);
  movingrect.shapeColor = "green";

  fixedrect = createSprite(1000,400,50,80)
  fixedrect.shapeColor = "green";

  gameObject1 = createSprite(800,80, 50, 50);
  gameObject1.shapeColor = "green"

  gameObject2 = createSprite(180,100,50,50);
  gameObject2.shapeColor = "green"

  gameObject3 = createSprite(280,100,50,50);
  gameObject3.shapeColor = "green"

  gameObject4 = createSprite(380,100,50,50);
  gameObject4.shapeColor = "green"

}

function draw() {
  background(0,0,0);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if (isTouching(movingrect, gameObject1)){
    movingrect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  else{
    movingrect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
 bounceOff(movingrect,fixedrect);
  drawSprites();
}

