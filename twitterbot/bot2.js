console.log('bot starting');

var Twit = require('twit');

var config = require('./config'); 
 var T = new Twit(config);

tweetIt();
setInterval(tweetIt, 1000*20);


function tweetIt() {

	var util = require('util');
	var fs = require('fs');

	var markov = require('markov');
	var m = markov(1);

	var s = fs.createReadStream(__dirname + '/freesmoke.txt');
	m.seed(s, function () {
	    var stdin = process.openStdin();
	    
	    stdin.on('data', function (line) {
	        var res = m.respond(line.toString()).join(' ');
	        var tweet = { 
	        	status: res + ' #Drake'
	        }
	        T.post('statuses/update', tweet, tweeted);
	    });
	});

	function tweeted(err, data, response) {
	  if (err) {
	  	console.log("Something went wrong!");
	  } else {
	    console.log("It worked!");
	  }
	}
}


var stream = T.stream('user');

var params = { 
  q: 'passionfruit', 
  count: 4
}

T.get('search/tweets', params, gotData); 

function gotData(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {

    var string = (tweets[i].text);
    console.log(string);
    var regex = /^[A-Za-z0-9_]{1,15}$$/;
    var found = string.match(regex);
    console.log(found);
  }
}




// tweetIt();
//setInterval(tweetIt, 1000*20);

// function tweetIt() {

// 	var r = Math.floor(Math.random()*100);

// 	var tweet = {
// 	  status: 'random number ' + r + ' asdf'
// 	}

// 	T.post('statuses/update', tweet, tweeted);


// 	function tweeted(err, data, response) {
// 	  if (err) {
// 	  	console.log("Something went wrong!");
// 	  } else {
// 	    console.log("It worked!");
// 	  }
// 	}
// }