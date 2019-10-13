
function setup() {
  createCanvas(400, 400);
  strokeWeight(2);
}

function draw() {

  for(var w = 10; w < width; w+= 10)
  {
    noFill();
    ellipse(width/2, height/2, w,w);
  }
}
