var button;
var textArea;
var concordance = {};
var keys = [];


function setup() {
  var canvas = createCanvas(600, 2500);
  canvas.parent('sketch-holder');
  
  button = select('#button-text');
  textArea = select('#input');

  textArea.value("Type in some words to visually see how many words are used how many times in this text box, so type type type type type !");
  button.mousePressed(createConcordance);
}


function createConcordance() {
  data = textArea.value();

  var tokens = data.split(/\W+/);

  for (var i = 0; i < tokens.length; i++) {

    var word = tokens[i].toLowerCase();

    if (concordance[word] === undefined) {
      concordance[word] = 1;
      keys.push(word); 
    } else {
      concordance[word]++;
    }
  }
  
  keys.sort(function(a, b) {
    return (concordance[b] - concordance[a]);
  });

  for (var i = 0; i < keys.length; i++) {
    console.log(keys[i] + ': ' + concordance[keys[i]]);
  }

  var ul = select('#concordance');

  for (var i = 0; i < keys.length; i++) {
    var li = createElement('li', keys[i]);
    li.parent(ul);
  }
}


function draw() {
  background(255);
  
  for (var i = 0; i < keys.length; i++){
    fill(map(i*15, 0, height, 0, 255));
    rect(random(142, 148), (i+1.1)*16.5, concordance[keys[i]]*20, 10);
  }
}






