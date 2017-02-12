var textbox;
var slider;
var paragraph;

function setup() {
  createCanvas(600, 600);
  paragraph = createP("text");
  textbox = createInput("enter");
  slider = createSlider("20, 30, 10");

  textbox.changed(updateText);
  textbox.input(updateText);
  slider.input(updateSize);
}

function updateText() {
  paragraph.html(textbox.value());
}

function updateSize() {
  paragraph.style("font-size", slider.value() + "pt");
}








