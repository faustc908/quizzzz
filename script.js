"use strict";
//Questions & Answers
const myQuestions = [
	{
	    'question': 'What was the capital of the Galatic republic?',
      'answers': ['Corascant', 'Nar Shadda', 'Dantooine', 'Tatooine'],
      'correct' : 0
	},
	{
	    'question': 'Who destroyed the first Death Star?',
      'answers': ['Han Solo', 'Luke Skywalker', 'Wedge', 'Biggs'],
      'correct': 1
	},
	{
	    'question': 'Who was Luke Skywalkers first master?',
      'answers': ['Anakin Skywalker', 'Master Yoda', 'Obi Wan Kenobi', 'Boba Fett'],
      'correct': 2
	},
	{
	    'question': 'Which Star Wars film was shot entirely in the studio?',
      'answers': ['Attack of the Clones','Revenge of the Sith','Return of the Jedi','A new Hope'],
      'correct': 1
	},
	{
	    'question': 'What color is Mace Windus lightsaber?',
      'answers': ['red','green','blue','purple'],
      'correct': 3
	},
	{
	    'question': 'The Star Wars Holiday Special was the first appearance of which  character?',
      'answers': ['Boba Fett', 'Jar Jar Binks','Lando Calrissian','Jabba the Hutt'],
      'correct': 0
	},
	{
	    'question': 'What actor pulled out of Episode III when he discovered that non-union actors were being used in the film?',
      'answers': ['Mel Gibson','Gary Oldman','George Clooney','Gary Coleman'],
      'correct': 1
	}
	];
let scoreCurrent = 0;
let questionTrack = 0;

$(document).ready(function(){
  $(".start-button").click(function(){
     beginQuiz();
  });
  // ---Next Button---
  $(".next-button").click(function(event){
    displayQuestion();
    $('.next').hide();
    $('.submit').show();
  });
  // ---Submit Button---
  $(".submit-button").click(function(event){
    if($('li.selected').length){
      let answer = $('li.selected').attr('id');
      checkAnswer(answer);
      $('.next').show();
      $('.submit').hide();
    } else {
      alert('Please select an answer');
    }
  }); 
  // ---Retake button---
  $(".retake-button").click(function(){
      scoreCurrent = 0;
      questionTrack = 0;
      $('.end-quiz').hide();
      beginQuiz();
      
  });
  // ---Clicking list items---
  $('ul.list').on('click', 'li', function(event) {
    $('.selected').removeClass();
    $(this).addClass('selected');
  });
  
});
// ---Functions section---
function beginQuiz() {
   $('.start-quiz').hide();
     $('.next').hide();
     $('.questions').show();
     displayQuestion();
      $('.score').text('Your Current Score: '+scoreCurrent);
}

function displayQuestion(){
  $('.question-number').text('Question Number: '+(questionTrack + 1)+"/7" );
  if(questionTrack < myQuestions.length){
    let listQuestion = myQuestions[questionTrack];
    $('h2').text(listQuestion.question);
    $('ul.list').html('');
    for (var i = 0; i < listQuestion.answers.length; i++) {
      $('ul.list').append('<li id = "'+i+'">'+listQuestion.answers[i] +'</li>');
    }
  } else {
    displayScore();
  }
}
// ---Checks if answer is correct, set correct to green, incorrect to red in CSS---
function checkAnswer(answer){
  let listQuestion = myQuestions[questionTrack];
  if(listQuestion.correct == answer){
    scoreCurrent++;
    $('li.selected').addClass('correct');
  } else {
    $('li.selected').addClass('incorrect');
    $('listQuestion.correct').addClass('correct');
  }
  $('.score').text('Your Score: '+scoreCurrent);
  questionTrack++;
}
// ---Display score and messages depending on # correct---
function displayScore(){
  $('.questions').hide();
  $('.end-quiz').show();
  $('.end-score').text("Your score is: " +scoreCurrent + '/7');
  if(scoreCurrent >= 4){
    $('.comment').text('Nice work!');
  }
  else {
    $('.comment').text('You can do better then that!');
  }
}