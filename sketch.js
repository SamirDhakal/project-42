var hour, minute, second;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  hour = hour();
  minute = minute();
  second = second();
}

function draw() {
  background(0);  

  angleMode(DEGREES);
  secondAngle = map(second, 0, 60, 0, 360);
  minuteAngle = map(minute, 0, 60, 0, 360);
  hourAngle = map(hour, 0, 12, 0, 360);

  push();
  rotate(secondAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();
  //translate();

  drawSprites();
}