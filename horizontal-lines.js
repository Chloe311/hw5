function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(x = 10; x < width; x+=10)
  {
    line(0, x, width, x)
  }
}
