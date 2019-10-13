https://editor.p5js.org/Chloe311/sketches/qsy7zvorT

var mySound;

function preload() {
  soundFormats("wav");
  mySound = loadSound("grassCut.wav");
}


function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;

function draw() {

  //color of the grass. stroke(hue, s, v);
  stroke(random(60, 70), 100, 90);
  //grass
  line(x, height - 10, x + random(-10, 10), height - 10 - random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  //if the grass is higher than 160, it cuts
  if (mouseIsPressed) {
    fill(255);
    rect(0, 0, width, height - 15);
    h = 10;
    mySound.play();
  }

  fill(40, 40, 60);
  rect(0, height - 10, width, 10);

}
