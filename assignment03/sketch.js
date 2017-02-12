var textbox;
var slider;
var paragraph;
var circles=[];

function circle(x, y) {
  this.x = x;
  this.y = y;
  this.col = color (map(mouseX, 0, 600, 0, 255));
  this.col2 = color (map(mouseX, 0, 600, 255, 0));

  this.display = function() {
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, 100, 30);
    ellipse(this.x, this.y, 30, 100);
    fill(this.col2);
    ellipse(this.x, this.y, 50, 50);
  }

  this.move = function() {
    this.x += random(-0.2, 0.2);
    this.y += random(-0.2, 0.2);
  }

  this.clicked = function() {
    this.col = color(0);
  }
}

function setup() {
  paragraph = createP("hellooooo");
  textbox = createInput("type here!");
  slider = createSlider("20, 30, 10");
  button = createButton("change border color");
  button.mousePressed(changeColor);
  createElement('br');

  textbox.changed(updateText);
  textbox.input(updateText);
  slider.input(updateSize);

  canvas = createCanvas(600, 600);
  bgcolor = color(0);

  //canvas.mouseOver(changeColor);

  for (var i = 0; i < 1; i++) {
    circles[i] = new circle(random(width), random(height));
  }
}

function draw() {
  background(bgcolor);
  fill(map(mouseX, 0, 600, 0, 255));
  rect(100, 100, 400, 400);

  for (var i = 0; i < circles.length; i++) {
    circles[i].display();
    circles[i].move();
  }
  if (circles.length > 50){
    circles.splice(0, 1);
  }
}

function mousePressed() {
  for (var i = 0; i < circles.length; i++) {
    if (dist(mouseX, mouseY, circles[i].x, circles[i].y) < 50) {
      circles[i].clicked();
    }
  }
}

function mouseDragged() {
  circles.push(new circle(mouseX, mouseY));
}

function updateText() {
  paragraph.html(textbox.value());
}

function updateSize() {
  paragraph.style("font-size", slider.value() + "pt");
}

function changeColor() {
  bgcolor = color(random(255));
}






