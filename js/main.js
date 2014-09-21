//Game rules.
alert('quiz game rules \n You will be given a choise betvine tre categories \n and then you will get tre questions from that catagory.\n If you get one question wrong you lose and have to start over.');

//Catagory choice in a do while loop using a switch case.
do {
	var i;
	var choose = prompt('choose one of these subjects:\n a) History. \n b)Sport.  \n c)Music.');
	choose = choose.toLowerCase();
	choose = choose.trim();
	switch (choose) {
	case ('a'):
		showQuestions(historyQestions);
		break;
	case ('b'):
		showQuestions(sportQuestions);
		break;
	case ('c'):
		showQuestions(musikQuestions);
		break;
	default:
		alert('Please enter the right subject.');

	}
	var answer2 = prompt('Play again? (yes/no)');
	answer2 = answer2.toLowerCase();
	answer2 = answer2.trim();

} while (answer2 === 'yes');

//underscore _.sufle to randomise the array
//
//The question loop functions;
function showQuestions(question) {
	for (i = 0; i < question.length; i++) {
		var userAnswer = Number(prompt(question[i].question));
		testAnswer(userAnswer, question[i].answer);
	}
}

function testAnswer(answer, questionAnswer) {
	if (answer === questionAnswer) {
		alert('That it the right answer');
	} else {
		alert('That is not the right answer');
	}
}