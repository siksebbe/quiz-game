'use strict';
quiz.ui = {};
quiz.ui.rules = function () {
	alert('quiz game rules \nYou will be given a choise betvine tre categories \nand then you will get tre questions from that catagory.\nIf you get the correct answer then you get one point else you get nothing.');
};
quiz.ui.showQuestions = function (questions, q) {
	var point = 0;
	for (var i = 0; i < q; i++) {
		var userAnswer = Number(prompt(questions[i].question));
		var boolAnswer = quiz.logic.testAnswer(userAnswer, questions[i].answer);
		if (boolAnswer === true) {
			quiz.ui.rightAnswer();
			point = quiz.logic.points(point);
		} else {
			quiz.ui.wrongAnswer();
		}
	}
	return point;
};
quiz.ui.rightAnswer = function () {
	alert('Great that´s the right answer!');
};
quiz.ui.wrongAnswer = function () {
	alert('Sorry but that is not the right answer.');
};
quiz.ui.charChooise = function () {
	var choose = prompt('choose one of these subjects:\n a) History. \n b)Sport.  \n c)Music.  \n d)Random');
	choose = choose.toLowerCase();
	choose = choose.trim();
	return choose;
};
quiz.ui.numberOfQuestions = function () {
	var numberOfQuestions = Number(prompt('Choose how many questions you whant to get. \n The minimum number is 3 and the maximum is 9.'));
	return numberOfQuestions;
};
quiz.ui.showPoints = function (points) {
	alert('You got ' + points + ' points');
};