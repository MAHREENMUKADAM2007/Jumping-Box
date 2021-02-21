var canvas;
var music;
var surface1 , surface2 , surface3 , surface4, box;

function preload(){
music = loadSound("music.mp3")   
}


function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite (700,550,100,10);
    surface1.shapeColor = "purple";

    surface2 = createSprite(550,550,100,10)
 surface2.shapeColor = "blue";

 surface3  = createSprite(400,550,100,10);
 surface3.shapeColor = "yellow";

 surface4 = createSprite(250,550,100,10);
 surface4.shapeColor = "pink"

box = createSprite(750,500,20,10);
 box.shapeColor = "blue";
 box.velocityY = -3;
 box.veocityX=3


 

 
 



    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();
   
    //create edgeSprite

    if (surface1.isTouching(box)&& box.bounceOff(surface1)){
  box.shapeColor = "purple";

    }

if(surface2.isTouching(box)&& box.bounceOff(surface2)){
    box.shapeColor = "blue";
}

if(surface3.isTouching(box)&& box.bounceOff(surface3)){
   box.shapeColor = "yellow";
}

if(surface4.isTouching(box)&&box.bounceOff(surface4)){
    box.shapeColor = "pink";
}


if(surface2.isTouching(box)){
    box.shapeColor = rgb(255,128,0);
    music.stop();
}

if(surface4.isTouching(box)){
    box.shapeColor = rgb(255,120,0);
    music.stop();
}
    drawSprites();



    //add condition to check if box touching surface and make it box
}
