function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(i = 10; i < width; i+=10)
  {
    line(0, i, width, i);
  }
}
