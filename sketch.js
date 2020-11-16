var bullet,wall,thicknes;
var speed,weight





function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(150,200,20,50);
  bullet.shapeColor=("white");
  thicknes=random(22,83);
  wall=createSprite(1282,200,thicknes,height/2);

wall.shapeColor = "white"
  
}

function draw() {
  background("black"); 
  
 // bullet.velocityX=speed;

  if (hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  }
  if (damage>10)
  {
    wall.shapeColour="green";
  }
  if (damage<10)
  {
    wall.shapeColour="red";
  }
  
  drawSprites();
}
function hascollided(lbullet,lwall)
{
   bulletrightedge=lbullet.x+lbullet.width;
  wallleftedge=lwall.x;
  if (bulletrightedge>=wallleftedge){
    return true;
  }

  
  return false;

}