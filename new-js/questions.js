'use strict';
quiz.questions = {};
quiz.questions.history = function () {
	var historyQestions = [{
		question: 'Vem var kungen av Babylon mellan  1792 och 1750 f.Kr? \n 1) Khufu. \n 2) Hammurabi. \n 3) Tutankhamon.',
		answer: 2

	}, {
		question: 'När dog prinsessan Diana av Wales? \n 1) 1996. \n 2) 1999. \n 3) 1997.',
		answer: 3

	}, {
		question: 'vilken svensk drottning är begravd i st. Perterkyrkan i Rom? \n 1) Kristina. \n 2) Margareta. \n 3) Ulrika Eleonora.',
		answer: 1

	}];
	historyQestions = _.shuffle(historyQestions);

	return historyQestions;
};
quiz.questions.sport = function () {
	var sportQuestions = [{
		question: 'Vem är en av bästa Hocky spelare i Sverige? \n 1) Henrik Lundgvist. \n 2) Christian Eriksen. \n 3) Zlatan Ibrahimovic.',
		answer: 1

	}, {
		question: 'I vilket land tog Sverige VM brons i fotboll för damer i 2011? \n 1) England. \n 2) Italien. \n 3) Tyskland.',
		answer: 3

	}, {
		question: 'Från vilket land kommer Diego Maradona? \n 1) USA. \n 2) Argentina. \n 3) Spanien.',
		answer: 2

	}];
	sportQuestions = _.shuffle(sportQuestions);

	return sportQuestions;
};
quiz.questions.musik = function () {
	var musikQuestions = [{
		question: 'Vem sjunger låten "Alejandro"? \n 1) Lady Gaga. \n 2) Katy Perry. \n 3) Miley Cyrus.',
		answer: 1

	}, {
		question: 'Vilket år dog Whitny Housten? \n 1) 2011. \n 2) 2013. \n 3) 2012.',
		answer: 3

	}, {
		question: 'I vilken stad dog Mikeal Jackson? \n 1) London. \n 2) Los Angoles. \n 3) Paris.',
		answer: 2

	}];
	musikQuestions = _.shuffle(musikQuestions);

	return musikQuestions;
};
quiz.questions.randomQuestions = function () {
	var randomQuestions = [{
		question: 'Vem var kungen av Babylon mellan  1792 och 1750 f.Kr? \n 1) Khufu. \n 2) Hammurabi. \n 3) Tutankhamon.',
		answer: 2

	}, {
		question: 'När dog Diana prinsessa av Wales? \n 1) 1996. \n 2) 1999. \n 3) 1997.',
		answer: 3

	}, {
		question: 'vilken svensk drottning är begravd i st. Perterkyrkan i Rom? \n 1) Kristina. \n 2) Margareta. \n 3) Ulrika Eleonora.',
		answer: 1

	}, {
		question: 'Vem är en av bästa Hocky spelare i Sverige? \n 1) Henrik Lundgvist. \n 2) Christian Eriksen. \n 3) Zlatan Ibrahimovic.',
		answer: 1

	}, {
		question: 'I vilket land tog Sverige VM brons i fotboll för damer i 2011? \n 1) England. \n 2) Italien. \n 3) Tyskland.',
		answer: 3

	}, {
		question: 'Från vilket land kommer Diego Maradona? \n 1) USA. \n 2) Argentina. \n 3) Spanien.',
		answer: 2

	}, {
		question: 'Vem sjunger låten "Alejandro"? \n 1) Lady Gaga. \n 2) Katy Perry. \n 3) Miley Cyrus.',
		answer: 1

	}, {
		question: 'Vilket år dog Whitny Housten? \n 1) 2011. \n 2) 2013. \n 3) 2012.',
		answer: 3

	}, {
		question: 'I vilken stad dog Mikeal Jackson? \n 1) London. \n 2) Los Angoles. \n 3) Paris.',
		answer: 2

	}];
	randomQuestions = _.shuffle(randomQuestions);

	return randomQuestions;
};