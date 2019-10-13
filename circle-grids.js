var a = 25;
var b = 25;

function setup() {
  createCanvas(400, 400);
  noStroke();

}

function draw() {
  background(0);
  
  //create a grid of circle
  for(x = 25; x < width; x += 25)
  {
    for(y = 25; y < height; y += 25)
    { 
      fill(255);
      ellipse(x, y, 20);
    }
  }
}
