$(function () {
	$('.section').hide();
	$('.section.0').show();
	$('.menuicon.2').hide();
	$('.menuicon.3').hide();
	var pp = 'quiz game rules \nYou will be given a choise betvine four categories \nand then you will get tre questions from that catagory.\nIf you get the correct answer then you get one point else you get nothing.';
	var pEl = $('<p></p>').text(pp);
	$('#infobox').append(pEl);

	$('.menuicon.1').click(function () {
		$('.section.1').show();
		$('.section.2').hide();
		$('.section.3').hide();
		$('.section.0').hide();
		$('.menuicon.1').hide();
		$('.menuicon.2').show();


	});
	$('.menuicon.2').click(function () {
		$('.section.2').show();
		$('.section.1').hide();
		$('.section.3').hide();
		$('.section.0').hide();
		$('.menuicon.1').hide();
		$('.menuicon.2').hide();
		$('.menuicon.3').hide();

	});
	$('.menuicon.3').click(function () {
		$('.section.3').hide();
		$('.section.1').hide();
		$('.section.2').hide();
		$('.section.0').hide();
		$('.section.4').show();
		$('.menuicon.3').hide();
	});

	var antalQuestions = 3;
	var index = 0;
	var point = 0;

	$('.button').click(function () {
		var obj = chooseSection(this.value);
		$('.section.3').show();
		$('.section.1').hide();
		$('.section.2').hide();
		$('.section.0').hide();
		$('.menuicon.3').show();
		$('#next').hide();
		$('#check').show();
		//$('#resultbox').hide();
		$('#question1').each(function () {
			var q = $(this).text(obj[index].question);
			$('#question1').append(q);
		});
		$('#answ1').each(function () {
			var a1 = $(this).text(obj[index].answer[0]);
			$('label[for="answer1"]').append(a1);
		});
		$('#answ2').each(function () {
			var a2 = $(this).text(obj[index].answer[1]);
			$('label[for="answer2"]').append(a2);
		});
		$('#answ3').each(function () {
			var a3 = $(this).text(obj[index].answer[2]);
			$('label[for="answer3"]').append(a3);
		});
		//next button , section 3
		$('#next').click(function () {
			$('#check').show();
			$('#next').hide();
			$('#resultbox').hide();
			if (index < antalQuestions - 1) {
				index = index + 1;
				$('#question1').each(function () {
					var q = $(this).text(obj[index].question);
					$('#question1').append(q);
				});
				$('#answ1').each(function () {
					var a1 = $(this).text(obj[index].answer[0]);
					$('label[for="answer1"]').append(a1);
				});
				$('#answ2').each(function () {
					var a2 = $(this).text(obj[index].answer[1]);
					$('label[for="answer2"]').append(a2);
				});
				$('#answ3').each(function () {
					var a3 = $(this).text(obj[index].answer[2]);
					$('label[for="answer3"]').append(a3);
				});

			} else {
				$('#questionbox').hide();
				$('#check').hide();
				$('#resultbox').show();
				$('#youranswer').text('');
				$('.result.1').text('');
				$('.result.4').text('');


				$('#yourpoint').text(point);
			}

		});
		//send button , section4
		$('#send1').click(function () {
			var playAgain = $('input:text[name=playagain]').val();
			playAgain = playAgain.trim();
			playAgain = playAgain.toLowerCase();
			if ((playAgain === 'yes') || (playAgain === 'y')) {
				$('.section.0').hide();
				$('.section.1').hide();
				$('.section.2').show();
				$('.section.3').hide();
				$('.section.4').hide();

			} else {
				$('.section.0').show();
				$('.section.1').hide();
				$('.section.2').hide();
				$('.section.3').hide();
				$('.section.4').hide();
			}
		});
		//check button section 3
		$('#check').click(function () {
			$('#check').hide();
			$('#next').show();
			$('#resultbox').show();
			$('.result.3').hide();
			$('.result.4').hide();
			$('#numq').hide();
			$('#send').hide();

			var userAnswer = $('input:radio[name=answer]:checked').val();
			if (checkAnswer(userAnswer, obj[index].correctAnswer[0])) {
				$('#youranswer').text('Correct');
				point = point + 1;
				$('#yourpoint').text(point);
				$('#correctanswer').hide();
			} else {
				$('.result.4').show();
				$('#youranswer').text('Wrong');
				var correctA = obj[index].correctAnswer[1];
				$('#correctanswer').text(correctA);

			}


		});
	});
	var chooseSection = function (select) {
		var questionS;
		switch (select) {
		case ('a'):
			questionS = game.questions.objHistory();
			$('#resultbox').hide();
			break;
		case ('c'):
			questionS = game.questions.objSport();
			$('#resultbox').hide();
			break;
		case ('b'):
			questionS = game.questions.objMusic();
			$('#resultbox').hide();
			break;
		case ('d'):
			$('#questionbox').hide();
			$('.result').hide();
			$('.result.3').show();
			antalQuestions = inputAntalQ();
			questionS = game.questions.objAll();
			break;
		default:
			alert('Please enter the right subject.');
		}
		return questionS;

	};
	var inputAntalQ = function () {

		$('#send').click(function () {
			antalQuestions = $('input:text[name=numq]').val();
			antalQuestions = antalQuestions.trim();
			antalQuestions = parseInt(antalQuestions);
			if ((antalQuestions >= 3) && (antalQuestions <= 9)) {
				$('.result.3').hide();
				$('#numq').hide();
				$('#send').hide();
				$('#questionbox').show();
				$('.result.1').show();
				$('.result.2').show();
				$('.result.4').show();

			} else {
				$('.result.3').show();

			}
		});

		return antalQuestions;

	};
	var checkAnswer = function (value, correct) {
		return (value === correct);
	};

});