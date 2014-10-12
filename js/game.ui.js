game.ui={};
game.ui.showQuestion= function (questions)
{

		var answer1 = prompt(questions);
		answer1=answer1.trim();
		answer1=Number(answer1);
		return answer1;
	

};
game.ui.answerCorrect=function()
{
	alert('your answer is correct.');

};
game.ui.answerWrong=function()
{
	alert('your answer is wrong.');
};
game.ui.showPoint=function(point)
{
	alert('your points are'+' '+point);
};
game.ui.gameInfo=function ()
{
	alert('quiz game rules \nYou will be given a choise betvine four categories \nand then you will get tre questions from that catagory.\nIf you get the correct answer then you get one point else you get nothing.');

};
game.ui.chooseQ=function ()
{
	var choose = prompt('choose one of these subjects:\n a) History. \n b) Sport.  \n c) Music. \n d) Differnt Questions.');
    choose=choose.toLowerCase();
    choose=choose.trim();
    return choose;
};
game.ui.antalQ= function()
{
	var antalQ= Number(prompt('Choose the number of questions:\n Note:\n Number of questions should be minimum three questions and maximum nine questions.'));
	return antalQ;
};
game.ui.playAgain= function()
{
	var answer2 = prompt('Do you want to play again? (yes/no)');
    answer2=answer2.toLowerCase();
    answer2=answer2.trim();
    return answer2;
};
game.ui.defult=function()
{
	alert('Please enter the right subject.');
};
game.ui.youWin=function()
{
	alert('Congratulations, you win.');

};
game.ui.youLose=function()
{
	alert('Sorry, Game over.');
};




