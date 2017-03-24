var button;
var textarea;
var savedText;

var inputText;
var area;
var allWords;
var totalSyllables=0;
var syl;

var addLine;


// function countSyllables(word) {
//   var syl = 0;
//   // return all syllables for a word
//   for (var i = 0; i < word.length; i++) {
//     if (vowelSound(word.charAt(i) + vowelSound(word.charAt(i+1)))|| vowelSound(word.charAt(i)))  {
//       syl++;
//     }
//   }
//   return syl;
// }

// function vowelSound(c) {
//    if (
//      ((c == 'ai') || (c == 'Ai') || (c == 'AI') ||
//       (c == 'au') || (c == 'Au') || (c == 'AU') ||
//       (c == 'ay') || (c == 'Ay') || (c == 'AY') ||
//       (c == 'ea') || (c == 'Ea') || (c == 'EA') ||
//       (c == 'ee') || (c == 'Ee') || (c == 'EE') ||
//       (c == 'ei') || (c == 'Ei') || (c == 'EI') ||
//       (c == 'eu') || (c == 'Eu') || (c == 'EU') ||
//       (c == 'ey') || (c == 'Ey') || (c == 'EY') ||
//       (c == 'ia') || (c == 'Ia') || (c == 'IA') ||
//       (c == 'ie') || (c == 'Ie') || (c == 'IE') ||
//       (c == 'io') || (c == 'Io') || (c == 'IO') ||
//       (c == 'iu') || (c == 'Iu') || (c == 'IU') ||
//       (c == 'iy') || (c == 'Iy') || (c == 'IY') ||
//       (c == 'oa') || (c == 'Oa') || (c == 'OA') ||
//       (c == 'oe') || (c == 'Oe') || (c == 'OE') ||
//       (c == 'oi') || (c == 'Oi') || (c == 'OI') ||
//       (c == 'oo') || (c == 'Oo') || (c == 'OO') ||
//       (c == 'ou') || (c == 'Ou') || (c == 'OU') ||
//       (c == 'oy') || (c == 'Oy') || (c == 'OY') ||
//       (c == 'ua') || (c == 'Ua') || (c == 'UA') ||
//       (c == 'ue') || (c == 'Ue') || (c == 'UE') ||
//       (c == 'ui') || (c == 'Ui') || (c == 'UI') ||
//       (c == 'uo') || (c == 'Uo') || (c == 'UO') ||
//       (c == 'uy') || (c == 'Uy') || (c == 'UY') ||
//       (c == 'ya') || (c == 'Ya') || (c == 'YA') ||
//       (c == 'ye') || (c == 'Ye') || (c == 'YE') ||
//       (c == 'yi') || (c == 'Yi') || (c == 'YI') ||
//       (c == 'yo') || (c == 'Yo') || (c == 'YO') ||
//       (c == 'yu') || (c == 'Yu') || (c == 'YU')) ||
//       ((c == 'a') || (c == 'A') || 
//       (c == 'e') || (c == 'E') || 
//       (c == 'i') || (c == 'I') || 
//       (c == 'o') || (c == 'O') || 
//       (c == 'u') || (c == 'U') || 
//       (c == 'y') || (c == 'Y'))) {
//     return true;
//   } else {
//     return false;
//   }
// }


function buttonPressed() {
  inputText = area.value();

  var delim = '.:;?! &@#$%^*()}+';

  allWords = splitTokens(inputText, delim);
 // console.log("word count: " + allWords.length);

  // for (var i = 0; i < allWords.length; i++) {
  //  totalSyllables += countSyllables(allWords[i]);    
  //   }

  // console.log("syllables count: " + totalSyllables);


for (var i = 0; i < allWords.length; i++) {
  var everyTen = (i+=10);
  allWords.splice(everyTen, 0, '<br>');
}
console.log(allWords);

newString = allWords.join(' ');
  createP("rap:<br>" + newString); 
}


function setup() {
  noCanvas();
  area = createElement('textarea', 'input text to break into ten words per line');
  area.size(400, 400);
  createElement('br');
  var button=createButton('save');
    button.mousePressed(buttonPressed);
}




