var pass = 50;		//Pass mark 
var score = 75;		//Current Score
var msg;			//Message

//Select message to write based on score
if (score>pass) {
 msg = 'congratulations, you passed!';
} else {
msg = 'have another go!';
}

var el = document,getElementById('answer');
el.textContext = msg; 	