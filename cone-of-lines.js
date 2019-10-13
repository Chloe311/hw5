
function setup() {
  createCanvas(400, 400);
  strokeWeight(2);
}

function draw() {
  background(255);
  for(var x = 10; x < width; x+= 10)
  {
    line(x, width, width/2, 0);
  }
}
