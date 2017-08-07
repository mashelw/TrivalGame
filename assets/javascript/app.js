//question and answer variables
var questions = {
	q1 : {
		question: "Who did Ross had a childhood crush on? ",    
	 	correct: "Rachel"
	},
	q2 : {
		question: "What is Monica's biggest pet peeve?",    
	 	correct: "Animals dressed as humans"
	 },
	q3 : {
		question: "Every week TV Guide comes to Chandler and Joey’s apartment. What name appears on the address label??", 
		correct: "Miss Chanandler Bong",
	},
	q4 : {
		question: "Rachel favorite movie:",    
	 	correct: "Weekend at Bernie’s"
	},
	q5 : {
		question: "What is Joey’s favorite food?",    
	 	correct: "Two pizzas"
	},
}

var choices = {
	a1 : [ "Monica","Pheobe", "Jan", questions.q1.correct],
	a2 : [ "Water rings on the coffee table",questions.q2.correct, "Crumbs","People who chew loudly"],
	a3 : ["Chandler Bing", "Chanandler Bong", questions.q3.correct, "Chanandler"],
	a4 : ["Dangerous Liaisons",questions.q4.correct,, "16 Candles","Pretty in Pink"],
	a5 : ["Lasagna","Two pizzas","Cereal", questions.q5.correct],
}

var correctCount;
var incorrectCount;
var outOfTimeCount;

var choice2;
var choice3;
var choice4;

//function declarations
function startUp() {
	correctCount = 0;
	incorrectCount = 0;
	outOfTimeCount = 0;
	console.log('correctCount', correctCount);
	console.log('incorrectCount', incorrectCount);
	
	$(document).ready(function(){
		$('#start').one("click", function(){
			questionGenerator();
		});
	});
}

function questionGenerator() {

	var delay = 1000 * 5;
	var userChoice;
	var i = 0;

	displayLoop();

	function displayLoop() {
		if (i < Object.keys(questions).length) {
			setTimeout(iterator, delay);

        	function iterator() {
        		i++;
            	console.log(i);
            	displayLoop();
        	}

			console.log('counter');
			$('h2').text(Object.values(questions)[i].question);
			$('#start').html('<h3 data-name="choice-a">' + Object.values(choices)[i][0]);
			$('#start').append('<h3 data-name="choice-b">' + Object.values(choices)[i][1]);
			$('#start').append('<h3 data-name="choice-c">' + Object.values(choices)[i][2]);
			$('#start').append('<h3 data-name="choice-d">' + Object.values(choices)[i][3]);

			$(document).on('click', 'h3', function() {
				clearTimeout(setTimeout(iterator, delay));
				userChoice = $(this).text();
				console.log('userChoice', userChoice);

				if (userChoice === Object.values(questions)[i].correct) {
					correctCount++;
					console.log('correctCount', correctCount);
					
				}

				else if (userChoice != Object.values(questions)[i].correct && userChoice != 'START GAME') {
					incorrectCount++;
					console.log('incorrectCount', incorrectCount);
				
				}
			});
		}

		else if (i === Object.keys(questions).length) {
			$('h2').text('Game Summary');
			$('#start').html('<h3 id="correct-count">Correct Answer Total: ' + correctCount);
			$('#start').append('<h3 id="incorrect-count">Incorrect Answer Total: ' + incorrectCount);
			$('#start').append('<h3 id="correct-count">Unsanswered Total: ' + outOfTimeCount);
			clearTimeout(iterator);
		
		}
    }
}


startUp();



