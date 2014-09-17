//Game rules.
alert('quiz game rules \n You will be given a choise betvine tre categories \n and then you will get tre questions from that catagory.\n If you get one question wrong you lose and have to start over.');

//Catagory choice in a do while loop using a switch case.
do {
	var choose = prompt('choose one of these subjects:\n a) History. \n b)Sport.  \n c)Music.');
	choose = choose.toLowerCase();
	choose = choose.trim();
	switch (choose) {
	case ('a'):
		stringAnswer(objH);
		break;
	case ('b'):
		stringAnswer(objS);
		break;
	case ('c'):
		stringAnswer(objM);
		break;
	default:
		alert('Please enter the right subject.');

	}
	var answer2 = prompt('Play again? (yes/no)');
	answer2 = answer2.toLowerCase();
	answer2 = answer2.trim();
} while (answer2 === 'yes');

//The question loop functions;
function stringAnswer(questionArray) {
	for (var i = 0; i < 3; i++) {
		var userAnswer = prompt(questionArray[i].question);
		userAnswer = userAnswer.toLowerCase();
		userAnswer = userAnswer.trim();
		if (userAnswer === questionArray[i].answer) {
			if (i !== 2) {
				alert('You made it you will continou to next question');
			} else {}
		} else {
			break;
		}
	}
	if (i === 3) {
		alert('Congratulations you made it.');
	} else {
		alert('You Faild and have to start over');
	}
}