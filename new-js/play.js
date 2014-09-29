'use strict';
quiz.play = function () {
	quiz.ui.rules();
	do {
		do {
			var char = quiz.ui.charChooise();
			var numberOfQuestions = quiz.logic.testChoosenChar(char);
			var questions = quiz.logic.subjectChoise(char);
		} while (questions === undefined);
		var points = quiz.ui.showQuestions(questions, numberOfQuestions);
		quiz.ui.showPoints(points);

		var replayAnswer = prompt('Play again? (yes/no)');
		replayAnswer = replayAnswer.toLowerCase();
		replayAnswer = replayAnswer.trim();
	} while (replayAnswer === 'yes' || replayAnswer === 'y');
};