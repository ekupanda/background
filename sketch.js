var r=225;
var g=50;
var b=0;
function setup(){
  createCanvas(1200,400);
}
function draw(){
  r=map(mouseX,0,1200,0,250);
  g =map(mouseX,50,900,100,100);
  b= map(mouseX,0,1200,50,120);

  background(r,g,b);

  fill(225);
  ellipse(mouseX,100,50,50);
  drawSprites();
}