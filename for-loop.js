var scores = [24, 32, 17];		//array of scores
var arrayLength = scores.lentgh;//Items in array
var roundNumber = 0;			//Current round 
var msg = '';					//Message

//Loop through the items in the array
]for (var i = 0;i< arrayLength; i++) {
	
	//Arrays are zero based (so 0 is round 1) 
	//add 1 to the current round
	round number = (i+1);
	
	//Write the current round to message
	msg += 'round ' + roundnumber + ': ';
	
	//Get the score from the scores array
	msg+= scores[i] + '<br />';
}

document.getElementById('answer').innerHTML = msg;