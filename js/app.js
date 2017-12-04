document.getElementById('submit-tweet').addEventListener('click',showTweet);
document.getElementById('tweet').addEventListener('keyup',availableCharacters);


function showTweet() {
	document.getElementById('tweets').style.display = 'block';
	var tweet = document.getElementById('tweet').value;
	var pTweet = document.createElement('p');
	pTweet.className = "tweet-content";
	pTweet.innerHTML = tweet;
	var date = new Date();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var finalHour = hour + ':'+ minutes;
	/*Trying moment.js -- fail*/
	// var date = '2017-12-04';
	// var format = 'LLLL';
	// var result = moment(date).format(format);
	var tweetHour = document.createElement('p');
	tweetHour.innerHTML = finalHour;
	var tweetContainer = document.createElement('article');
	tweetContainer.className = "tweet";
	tweetContainer.className = 'tweet-background';
	tweetContainer.appendChild(pTweet);
	tweetContainer.appendChild(tweetHour);
	document.getElementById("tweets").appendChild(tweetContainer);
	document.getElementById('tweet').value = "";
	document.getElementById('available-characters').innerHTML = '140';
	console.log(document.getElementById('tweets'));
}

function availableCharacters() {
	var tweet = document.getElementById('tweet').value;
	var availableCharacters = 140 - tweet.length;
	document.getElementById('submit-tweet').disabled = tweet.length > 0 ? false : true;
	if (tweet.length > 0) {
		document.getElementById('submit-tweet').className = 'active';
	}
	document.getElementById('submit-tweet').className = 'active';
	document.getElementById('available-characters').innerHTML = availableCharacters;
	document.getElementById('submit-tweet').disabled = availableCharacters <= 0 ? true : false;
	if(availableCharacters <= 20 && availableCharacters > 10) {
		document.getElementById('available-characters').style.color = 'red';
	} else if (availableCharacters <= 10) {
		document.getElementById('available-characters').style.color = 'blue';
	}
}	