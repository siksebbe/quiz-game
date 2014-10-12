game.questions = {};
game.questions.objHistory = function() {
	var objHistory = [{
		question: 'Vem var kungen till Babylon mellan  1792 och 1750 f.Kr?',
		answer: ['Khufu', 'Hammurabi', 'Tutankhamon'],
		correctAnswer: ['2', 'Hammurabi']
	}, {
		question: 'När dog Diana prinsessa av Wales?',
		answer: ['1998', '1999', '1997'],
		correctAnswer: ['3', '1997']
	}, {
		question: 'vilken svensk drottning som grävde i st. Perterkyrkan i Rom?',
		answer: ['Kristina', 'Margareta', 'Ulrika Eleonora'],
		correctAnswer: ['1', 'Kristina']

	}];
	objHistory = _.shuffle(objHistory);
	return objHistory;
};

game.questions.objSport = function() {
	var objSport = [{
		question: 'Vem är en av bästa Hocky spelare i Sverige?',
		answer: ['Henrik Lundgvist', 'Christian Eriksen', 'Zlatan Ibrahimovic'],
		correctAnswer: ['1', 'Henrik Lundgvist']
	}, {
		question: 'På vilket land tog Sverige brons VM i fotboll för damer i 2011?',
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

game.questions.objMusic = function() {
	var objMusic = [{
		question: 'Vem som sjunger låten "Alejandro"?',
		answer: ['Lady Gaga', 'Katy Perry', 'Miley Cyrus'],
		correctAnswer: ['1', 'Lady Gaga']
	}, {
		question: 'på vilket år dog Whitny Housten?',
		answer: ['2011', '2013', '2012'],
		correctAnswer: ['3', '2012']

	}, {
		question: 'På vilket land dog Mikeal Jackson?',
		answer: ['London', 'Los Angoles', 'Paris'],
		correctAnswer: ['2', 'Los Angoles']

	}];
	objMusic = _.shuffle(objMusic);
	return objMusic;
};
game.questions.objAll = function() {
	var objAll = [{
		question: 'Vem var kungen till Babylon mellan  1792 och 1750 f.Kr?',
		answer: ['Khufu', 'Hammurabi', 'Tutankhamon'],
		correctAnswer: ['2', 'Hammurabi']
	}, {
		question: 'När dog Diana prinsessa av Wales?',
		answer: ['1998', '1999', '1997'],
		correctAnswer: ['3', '1997']
	}, {
		question: 'vilken svensk drottning som grävde i st. Perterkyrkan i Rom?',
		answer: ['Kristina', 'Margareta', 'Ulrika Eleonora'],
		correctAnswer: ['1', 'Kristina']

	}, {
		question: 'Vem är en av bästa Hocky spelare i Sverige?',
		answer: ['Henrik Lundgvist', 'Christian Eriksen', 'Zlatan Ibrahimovic'],
		correctAnswer: ['1', 'Henrik Lundgvist']
	}, {
		question: 'På vilket land tog Sverige brons VM i fotboll för damer i 2011?',
		answer: ['London', 'Rom', 'Tyskland'],
		correctAnswer: ['3', 'Tyskland']

	}, {
		question: 'Från vilket land kommer Diego Maradona?',
		answer: ['USA', 'Argentina', 'Spanien'],
		correctAnswer: ['2', 'Argentina']

	}, {
		question: 'Vem som sjunger låten "Alejandro"?',
		answer: ['Lady Gaga', 'Katy Perry', 'Miley Cyrus'],
		correctAnswer: ['1', 'Lady Gaga']
	}, {
		question: 'på vilket år dog Whitny Housten?',
		answer: ['2011', '2013', '2012'],
		correctAnswer: ['3', '2012']

	}, {
		question: 'På vilket land dog Mikeal Jackson?',
		answer: ['London', 'Los Angoles', 'Paris'],
		correctAnswer: ['2', 'Los Angoles']

	}];
	objAll = _.shuffle(objAll);
	return objAll;
};