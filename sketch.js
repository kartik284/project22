var canvas;
var fixedRect1,fixedRect2,fixedRect3,fixedRect4;
var movingRect, edges;
var music;

function preload(){
   music=loadSound("musisc.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    fixedRect1 = createSprite(0,580,360,30);
    fixedRect1.shapeColor = "blue";

    fixedRect2 = createSprite(295,580,200,30);
    fixedRect2.shapeColor = "yellow";

    fixedRect3=createSprite(400,450,200,30);
    fixedRect3.shapeColor="red";

    fixedRect4=createSprite(500,550,200,30);
    fixedRect4.shapeColor="green";

   

    movingRect = createSprite(random(20,750),100, 40,40);
    movingRect.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    movingRect.velocityX=3;
    movingRect.velocityY=3;        

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    movingRect.bounceOff(edges);
    if(movingRect.x<0){
        music.stop()
         movingRect.velocityX=3;
    }
    if(movingRect.x>800){
          music.stop()
           movingRect.velocityX=-3;
    }

    
    //write code to bounce off movingRect from the fixedRect1 
    if(isTouching(movingRect,fixedRect4)){
        movingRect.shapeColor = "green";
        music.play();
        bounceOff(movingRect,fixedRect4)
    }
    
if(isTouching(movingRect,fixedRect3)){
        movingRect.shapeColor = "red";
        music.stop();
        bounceOff(movingRect,fixedRect3)
    }
    if(isTouching(movingRect,fixedRect2)){
        movingRect.shapeColor = "yellow";
        music.stop();
        bounceOff(movingRect,fixedRect2)
        movingRect.velocityX=3;
    movingRect.velocityY=3;   
    }
    if(isTouching(movingRect,fixedRect1)){
        movingRect.shapeColor = "blue";
        music.stop();
        bounceOff(movingRect,fixedRect1);
    }

    
if(movingRect.y<0){
    muisc.stop()
    movingRect.velocityY=3;
}
    

    drawSprites();
}
function isTouching(object1,object2){
if(object1.x-object2.x<object2.width/2+object1.width/2 && object2.x-object1.x<object2.width/2+object1.width/2 && 
  object1.y-object2.y<object2.height/2+object1.height/2 && object2.y-object1.y<object2.height/2+object1.height/2)    
 
return true;

else {
    return false;
}
}
function bounceOff( object1,object2){
    if(object1.x-object2.x<object2.width/2+object1.width/2 && object2.x-object1.x<object1.width/2+object2.width/2 ) {
    object1.velocityX=object1.velocityX*-1;
    object2.velocityX=object2.velocityX*-1;
    } 
    if(object1.y-object2.y<object2.height/2+object1.height/2 && object2.y-object1.y<object2.height/2+object1.height/2)  
    {
    object1.velocityY=object1.velocityY*-1;
    object2.velocityY=object2.velocityY*-1;
    }  

if(object1.x<0){
    object1.velocityX=3;
}
else if(object2.x>800){
    object2.velocityX=-3;
}

}
