function setup() {
  createCanvas(400, 400);
}

function draw() {
  var y = 10;
  for (var x = 10; x < width; x += 5) {
      line(x, 0, x, y);
      y +=10;
  }
}
