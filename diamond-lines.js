var y = 0;
var y2= 200;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  while (y < 200) {
    for (var x = 5; x < width/2; x += 10) {
      line(width / 2 - x, y, width / 2 + x, y);
      y+= 10;
    }
  }
  
  for(var x2 = width/2; x2 > 0; x2-= 10)
  {
    line(width/2 - x2, y2, width/2 + x2, y2);
    y2+= 10;
  }
}
