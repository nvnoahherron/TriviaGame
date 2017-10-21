var time = 30;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

$(document).ready(function() {

	$("#questions").hide();

	$("#results").hide();

	$("#startButton").on("click", function(){

		$("#start").hide();

		$("#questions").show();

		begin();
	});

	$("#submitButton").on("click", function(){
		stop();
	});
	//retrieve Value
	//display value

	function retrieveAnswers(){
		var q1Answer = $( "input[type=radio][name=q1]:checked" ).val();
		var q2Answer = $( "input[type=radio][name=q2]:checked" ).val();
		var q3Answer = $( "input[type=radio][name=q3]:checked" ).val();
		var q4Answer = $( "input[type=radio][name=q4]:checked" ).val();
		var q5Answer = $( "input[type=radio][name=q5]:checked" ).val();
		var q6Answer = $( "input[type=radio][name=q6]:checked" ).val();
		var q7Answer = $( "input[type=radio][name=q7]:checked" ).val();
		var q8Answer = $( "input[type=radio][name=q8]:checked" ).val();

		if (q1Answer === "correct") {
			correct++;
			console.log(correct);
		}
		else if (q1Answer === "incorrect") {
			incorrect++;
			console.log(incorrect);
			return;
		}
		else if (q1Answer === undefined) {
			unanswered++;
		};

		if (q2Answer === "correct") {
			correct++;
		}
		else if (q2Answer === "incorrect") {
			incorrect++;
		}
		else if (q2Answer === undefined) {
			unanswered++;
		};
		if (q3Answer === "correct") {
			correct++;
		}
		else if (q3Answer === "incorrect") {
			incorrect++;
		}
		else if (q3Answer === undefined) {
			unanswered++;
		};
		if (q4Answer === "correct") {
			correct++;
		}
		else if (q4Answer === "incorrect") {
			incorrect++;
		}
		else if (q4Answer === undefined) {
			unanswered++;
		};
		if (q5Answer === "correct") {
			correct++;
		}
		else if (q5Answer === "incorrect") {
			incorrect++;
		}
		else if (q5Answer === undefined) {
			unanswered++;
		};
		if (q6Answer === "correct") {
			correct++;
		}
		else if (q6Answer === "incorrect") {
			incorrect++;
		}
		else if (q6Answer === undefined) {
			unanswered++;
		};
		if (q7Answer === "correct") {
			correct++;
		}
		else if (q7Answer === "incorrect") {
			incorrect++;
		}
		else if (q7Answer === undefined) {
			unanswered++;
		};
		if (q8Answer === "correct") {
			correct++;
		}
		else if (q8Answer === "incorrect") {
			incorrect++;
		}
		else if (q8Answer === undefined) {
			unanswered++;
		};

	};

	function timer(){
		time = time-1;

		$("#timeClock").html("Time Remaining: " + time);

		//option for when they click submit
			//stop timer

		if (time === 0) {
			stop();

			retrieveAnswers();
		};

	};

	function begin(){
		intervalId = setInterval(timer, 1000);
	};

	function stop(){
		clearInterval(intervalId);

		$("#questions").hide();
		$("#results").show();
		retrieveAnswers();
		$("#correctResults").html("Correct Answers: " + correct);
		$("#incorrectResults").html("Incorrect Answers: " + incorrect);
		$("#unansweredResults").html("Unanswered Questions: "+ unanswered);
	};
});