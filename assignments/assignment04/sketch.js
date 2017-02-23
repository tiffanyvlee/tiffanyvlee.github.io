// add sound file (multiple beats?)
//

var button;
var textarea;
var savedText;

function setup() {
	song = loadSound('');
	createCanvas(100, 100);
	background(0);

	noCanvas();
	textarea = createElement('textarea', 'Enter text here');
	textarea.size(300, 400);
	createElement('br');
	button = createButton('push to save');
	button.mousePressed(saveText);
}

function mousePressed(){
	if (song.isPlaying()) {
		song.stop();
	} else {
		song.play();
	}
}

function saveText() {
	savedText = textarea.value();
	createP("original text: " + savedText);

	var textArr = splitTokens(savedText, '.:;?! @#$%()');
	var length = textArr.length;

	var numToRemove = textArr.length/2;

	for (var i = 0; i < numToRemove; i++) {
		var whichIndex = int(random(textArr.length));
		textArr.splice(whichIndex, 1);
	}

	var newString = join(textArr, ' ');
	creatP("new text: " + newString);
}
