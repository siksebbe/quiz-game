game.logic = {};
game.logic.testUseranswer = function(useranswer, questionanswer) {
	return (useranswer === questionanswer);
};
game.logic.endingResult = function(point, antalquestions) {
	if (point === antalquestions) {
		game.ui.youWin();

	} else {
		game.ui.youLose();
	}

};
game.logic.chooseSection = function(choose1, antalQuestions) {
	switch (choose1) {
		case ('a'):
			game.logic.showQ(game.questions.objHistory(), antalQuestions);
			break;
		case ('b'):
			game.logic.showQ(game.questions.objSport(), antalQuestions);
			break;
		case ('c'):
			game.logic.showQ(game.questions.objMusic(), antalQuestions);
			break;
		case ('d'):
			do {
				antalQuestions = game.ui.antalQ();
			} while ((antalQuestions < 3) || (antalQuestions > 9));
			game.logic.showQ(game.questions.objAll(), antalQuestions);
			break;
		default:

			game.ui.defult();

	}

};
game.logic.pointR = function(point1) {
	point1 = point1 + 1;
	return point1;

};

game.logic.showQ = function(questions, antalQuestions) {
	var point1 = 0;
	var answerQ;

	for (var i = 0; i < antalQuestions; i++) {

		answerQ = game.ui.showQuestion(questions[i].question);
		if (game.logic.testUseranswer(answerQ, questions[i].answer)) {
			point1 = game.logic.pointR(point1);
			game.ui.answerCorrect();
		} else {
			game.ui.answerWrong();

		}
	}
	game.ui.showPoint(point1);
	game.logic.endingResult(point1, antalQuestions);

};