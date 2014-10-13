game.questions = {};
game.questions.objHistory = function () {
	var objHistory = [{
		question: 'Vem var kungen av Babylon mellan  1792 och 1750 f.Kr?',
		answer: ['Khufu', 'Hammurabi', 'Tutankhamon'],
		correctAnswer: ['2', 'Hammurabi']
	}, {
		question: 'När dog prinsessa Diana av Wales?',
		answer: ['1998', '1999', '1997'],
		correctAnswer: ['3', '1997']
	}, {
		question: 'vilken svensk drottning är begravd i st. Perterkyrkan i Rom?',
		answer: ['Kristina', 'Margareta', 'Ulrika Eleonora'],
		correctAnswer: ['1', 'Kristina']

	}];
	objHistory = _.shuffle(objHistory);
	return objHistory;
};

game.questions.objSport = function () {
	var objSport = [{
		question: 'Vem är en av bästa Hocky spelare i Sverige?',
		answer: ['Henrik Lundgvist', 'Christian Eriksen', 'Zlatan Ibrahimovic'],
		correctAnswer: ['1', 'Henrik Lundgvist']
	}, {
		question: 'I vilket land tog Sverige brons VM i fotboll för damer i 2011?',
		answer: ['London', 'Rom', 'Tyskland'],
		correctAnswer: ['3', 'Tyskland']

	}, {
		question: 'Från vilket land kommer Diego Maradona?',
		answer: ['USA', 'Argentina', 'Spanien'],
		correctAnswer: ['2', 'Argentina']

	}];
	objSport = _.shuffle(objSport);
	return objSport;
};

game.questions.objMusic = function () {
	var objMusic = [{
		question: 'Vem sjunger låten "Alejandro"?',
		answer: ['Lady Gaga', 'Katy Perry', 'Miley Cyrus'],
		correctAnswer: ['1', 'Lady Gaga']
	}, {
		question: 'Vilket år dog Whitny Housten?',
		answer: ['2011', '2013', '2012'],
		correctAnswer: ['3', '2012']

	}, {
		question: 'I vilken stad dog Mikeal Jackson?',
		answer: ['London', 'Los Angoles', 'Paris'],
		correctAnswer: ['2', 'Los Angoles']

	}];
	objMusic = _.shuffle(objMusic);
	return objMusic;
};
game.questions.objAll = function () {
	var objAll = [{
		question: 'Vem var kungen av Babylon mellan  1792 och 1750 f.Kr?',
		answer: ['Khufu', 'Hammurabi', 'Tutankhamon'],
		correctAnswer: ['2', 'Hammurabi']
	}, {
		question: 'När dog prinsessan Diana av Wales?',
		answer: ['1998', '1999', '1997'],
		correctAnswer: ['3', '1997']
	}, {
		question: 'vilken svensk drottning är begravd i st. Perterkyrkan i Rom?',
		answer: ['Kristina', 'Margareta', 'Ulrika Eleonora'],
		correctAnswer: ['1', 'Kristina']

	}, {
		question: 'Vem är en av sveriges bästa Hocky spelare?',
		answer: ['Henrik Lundgvist', 'Christian Eriksen', 'Zlatan Ibrahimovic'],
		correctAnswer: ['1', 'Henrik Lundgvist']
	}, {
		question: 'I vilket land tog Sverige VM brons i dam fotboll 2011?',
		answer: ['London', 'Rom', 'Tyskland'],
		correctAnswer: ['3', 'Tyskland']

	}, {
		question: 'Från vilket land kommer Diego Maradona?',
		answer: ['USA', 'Argentina', 'Spanien'],
		correctAnswer: ['2', 'Argentina']

	}, {
		question: 'Vem sjunger låten "Alejandro"?',
		answer: ['Lady Gaga', 'Katy Perry', 'Miley Cyrus'],
		correctAnswer: ['1', 'Lady Gaga']
	}, {
		question: 'på vilket år dog Whitny Housten?',
		answer: ['2011', '2013', '2012'],
		correctAnswer: ['3', '2012']

	}, {
		question: 'I vilke stad dog Mikeal Jackson?',
		answer: ['London', 'Los Angoles', 'Paris'],
		correctAnswer: ['2', 'Los Angoles']

	}];
	objAll = _.shuffle(objAll);
	return objAll;
};