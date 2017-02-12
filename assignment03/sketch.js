var textbox;
var slider;
var paragraph;

function setup() {
  paragraph = createP("text");
  textbox = createInput("enter");
  slider = createSlider("20, 30, 10");
  button = createButton("push!");
  button.mousePressed(changeColor);
  createElement('br');

  textbox.changed(updateText);
  textbox.input(updateText);
  slider.input(updateSize);

  createCanvas(600, 600);
  bgcolor = color(200);

  canvas.mouseOver(changeColor);
}

function draw() {
  background(bgcolor);
  rect(100, 100, 10, 10);
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






