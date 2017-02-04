var COLS_NUM = 10;
var ROWS_NUM = 10;

var[][] posx = new float[COLS_NUM][ROWS_NUM];
var[][] posy = new float[COLS_NUM][ROWS_NUM];

var[][] velx = new float[COLS_NUM][ROWS_NUM];
var[][] vely = new float[COLS_NUM][ROWS_NUM];

function setup() {
  createCanvas(600, 600);

  var xStepAmount = (width-200)/(posx.length - 1);
  var yStepAmount = (height - 200)/(posx[0].length - 1);

  for (var i = 0; i < posx.length; i++) {
    for (var j = 0; j < posx[0].length; j++) {
      posx[i][j] = 100 + i * xStepAmount;
      posy[i][j] = 100 + j * yStepAmount;
      velx[i][j] = random(-0.5,0.5);
      vely[i][j] = random(-0.5,0.5);
    }
  }

  noCursor();
  noStroke();
  
  background(100, 150, 100);
   
}

function draw() {


  for (var i = 0; i < posx.length; i++) {
    for (var j = 0; j < posx[0].length; j++) {
      fill(0, random(50, 150), 0);    
      ellipse(posx[i][j], posy[i][j], 10, 10);
      
      if (posx[i][j] < 0 || posx[i][j] > width) {
        velx[i][j] *= -1;
        posx[i][j] += velx[i][j];
      } else {
        posx[i][j] += velx[i][j];
      }
      
      if (posy[i][j] < 0 || posy[i][j] > height) {
        vely[i][j] *= -1;
        posy[i][j] += vely[i][j];
      } else {
        posy[i][j] += vely[i][j];
      }
    }
  }
}