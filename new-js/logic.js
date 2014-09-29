'use strict';
quiz.logic = {};
quiz.logic.testAnswer = function (answer, questionAnswer) {
	return (answer === questionAnswer);
};
quiz.logic.testChoosenChar = function (char) {
	var numberOfQuestions = 3;
	if (char === 'd') {
		numberOfQuestions = quiz.ui.numberOfQuestions();
	} else {}
	return numberOfQuestions;
};
quiz.logic.points = function (points) {
	points = points + 1;
	return points;
};

quiz.logic.subjectChoise = function (subjectItem) {
	var questions;
	switch (subjectItem) {
	case ('a'):
		questions = quiz.questions.history();
		break;
	case ('b'):
		questions = quiz.questions.sport();
		break;
	case ('c'):
		questions = quiz.questions.musik();
		break;
	case ('d'):
		questions = quiz.questions.randomQuestions();
		break;
	default:
		alert('Please enter the right subject.');

	}
	return questions;
};