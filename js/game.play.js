game.play= function()
{
	game.ui.gameInfo();
	do	
	{
      var antalQuestions=3;
      var choose1=game.ui.chooseQ();
      game.logic.chooseSection(choose1,antalQuestions);
      answerA=game.ui.playAgain();
    }while((answerA==='yes')||(answerA==='y'));
};


