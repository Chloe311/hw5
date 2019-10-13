function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(x = 10; x < width; x+=10)
  {
    line(x, 0, x, 400)
  }
}
