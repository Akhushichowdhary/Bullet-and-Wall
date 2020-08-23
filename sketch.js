var bullet, stand;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
 bullet = createSprite(30,200,100,60);
 speed = random(223,321);
 weight = random(30,52);

 



 stand = createSprite(1200,200,thickness,height/2);
 stand.shapeColor = color(80,80,80);
 
  
 
}

function draw() {
  background("black");  
  drawSprites();

  
 thickness = random(22,83);

bullet.velocityX = speed;





if(stand.x - bullet.x < (bullet.width + stand.width)/2){
  bullet.velocityX = 0;
  
  var deformation  = 0.5 * weight * speed * speed/22509;
    
  if(deformation >180)
  {
   bullet.shapeColor = "green";
     
  }
 
  if(deformation < 180 && deformation > 100)
  {
   bullet.shapeColor = "yellow";
    
  }

  if(deformation < 100)
  {
    bullet.shapeColor = "red";
    
}

}
if(hasCollided(bullet,stand))
{
 bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage>10)
  {
    stand.shapeColor = color(255,0,0);
  }

  if(damage<10)
  {
    stand.shapeColor = color(0,255,0);
  }
}

}
function hasCollided(bullet,stand)
{
  bulletRightEdge = bullet.x + bullet.width;
  standLeftEdge = stand.x;
  if(bulletRightEdge>= standLeftEdge)
  {
    return true;
  }
  return false;
}