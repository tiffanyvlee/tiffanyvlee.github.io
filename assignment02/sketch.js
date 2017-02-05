function setup() {
  createCanvas(600, 600);
  background(255, 200, 220);
}

function draw() {
  for (var i = 102; i < 600; i = i + 200) {
    for (var j = 102; j < 600; j = j + 200) {
     drawFlower(i, j);
   }
  }

  for (var k = 200; k < 600; k = k + 200) {
    for (var l = 200; l < 600; l = l + 200) {
      drawFlower(k,l);
    }
  }  
}

function drawFlower(i, j) {
var rotAngle = 45;
  push();
    translate(i, j);
    rotate(radians(rotAngle++));
    //center rect behind
    fill(255, 50, 200);
    rectMode(CENTER);
    rect(0, 0, 60, 8);
    //center rect front
    rotate(radians(rotAngle/2));
    fill(255, 200, 200);
    rect(0, 0, 30, 8);

    push();
      translate(30, 30);
      rotate(radians(rotAngle/2));   
      fill(255, 0, 100);
      rect(10, 10, 100, 5);
    
      push();
        translate(10, 10);
        rotate(radians(rotAngle++));
        fill(200, 50, 255);
        rect(10, 10, 30, 2);

      pop();
    pop();  
  pop();
}