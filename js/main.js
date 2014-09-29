// 'use strict';
// //Game rules.
// // alert('quiz game rules \nYou will be given a choise betvine tre categories \nand then you will get tre questions from that catagory.\nIf you get one question wrong you lose and have to start over.');
// //the question loop functions.

// // var testAnswer = function (answer, questionAnswer) {
// // 	if (answer === questionAnswer) {
// // 		alert('That it the right answer');
// // 	} else {
// // 		alert('That is not the right answer');
// // 	}
// // };

// // var showQuestions = function (question, q) {
// // 	question = _.shuffle(question);
// // 	for (var i = 0; i < q; i++) {
// // 		var userAnswer = Number(prompt(question[i].question));
// // 		testAnswer(userAnswer, question[i].answer);
// // 	}
// // };

// //Catagory choice in a do while loop using a switch case.
// do {
// 	var numberOfQuestions = 3;
// 	var choose = prompt('choose one of these subjects:\n a) History. \n b)Sport.  \n c)Music.  \n d)Random');
// 	choose = choose.toLowerCase();
// 	choose = choose.trim();
// 	switch (choose) {
// 	case ('a'):
// 		showQuestions(historyQestions, numberOfQuestions);
// 		break;
// 	case ('b'):
// 		showQuestions(sportQuestions, numberOfQuestions);
// 		break;
// 	case ('c'):
// 		showQuestions(musikQuestions, numberOfQuestions);
// 		break;
// 	case ('d'):
// 		do {
// 			numberOfQuestions = 0;
// 			numberOfQuestions = Number(prompt('Choose how many questions you whant to get. \n The minimum number is 3 and the maximum is 9.'));
// 		} while (numberOfQuestions < 3 || numberOfQuestions > 9);
// 		showQuestions(randomQuestions, numberOfQuestions);
// 		break;
// 	default:
// 		alert('Please enter the right subject.');

// 	}
// 	var replayAnswer = prompt('Play again? (yes/no)');
// 	replayAnswer = replayAnswer.toLowerCase();
// 	replayAnswer = replayAnswer.trim();
// } while (replayAnswer === 'yes');