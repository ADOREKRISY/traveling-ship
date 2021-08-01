var ship
var shipimage

var ship2
var ship2image

var sea 
var seaimage 

function preload(){
shipimage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

ship2image=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

seaimage=loadImage("sea.png")
}

function setup(){
  createCanvas(1200,400);
sea=createSprite(0,100)
   sea.addImage("background",seaimage)
   sea.scale=1
   sea.velocityX=-3
ship2=createSprite(300,260,20,20)
   ship2.addAnimation("moving",ship2image)
   ship2.scale=0.2
ship=createSprite(200,260,20,20)
  ship.addAnimation("moving",shipimage)
  ship.scale=0.3


}

function draw() {
  background("blue");
if (sea.x<0)
{
  sea.x=sea.width/2
}
 drawSprites()
}