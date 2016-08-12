
var user = {}
var responses = []

function question1() {
  var name = prompt (' What is your name?')
  user.name = name
}

question1();

function question2() {
  var firstQuestion = prompt('Does null === 0 ? (Yes or No)')
  if (firstQuestion.toLowerCase() === 'yes') {
    firstQuestion = true
  } else if (firstQuestion.toLowerCase() === 'no') {
    firstQuestion = false
  } else {
    alert("Please answer either Yes or No");
    return question2();
  }
  responses.push(firstQuestion);
}

question2();

function question3() {
  var js = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?')
  js = js.toLowerCase();
  switch (js) {
    case 'java':
      js = false
      break;
    case 'livescript':
      js = true
      break;
    case 'javalive':
      js = false
      break;
    case 'scriptyscript':
      js = false
      break;
    default: 
      alert('You have to select one of this answers: Java, JavaLive, JavaScript, LiveScript or ScriptyScript')
      question3();
    break;
  } 
  responses.push(js);
}

question3()

function question4 () {
  var player = prompt('What is the name of FCBarcelona number 9 player : Suarez, Neymar or Messi? ')
  player = player.toLowerCase();
  switch (player) {
    case 'suarez':
      player = true
      break;
    case 'neymar':
      player = false
      alert ('Are you kidding me? Ok i will mark it as your answer.')
      break;
    case 'messi':
      player = false
      alert ('Really!?!?')
      break;
    default:
      alert ('Choose one of the given options smartass!!')
      question4()
      break;
  }
  responses.push(player)
}

question4() 

function question5 () {
  var fifthQuestion = prompt('Who is the best football player of FCBarcelona? (This is an easy question)')
  fifthQuestion = fifthQuestion.toLowerCase()
  if (fifthQuestion === 'messi') {
    fifthQuestion = true;
  } else {
    fifthQuestion = false;
    alert ('Do you really know something about football !? :P')
  }
  responses.push(fifthQuestion) 
}

question5()

function evaluate(responsesArray) {
  var totalcorrect = 0
  var totalwrong = 0
  for (i=0, l = responsesArray.length; i < l ; i++) {
    if (responsesArray[i] === true) {
      totalcorrect += 1;
    } else if (responsesArray[i] === false) {
      totalwrong += 1;
    }
  }
  user.correct_answers = totalcorrect;
  user.wrong_answers = totalwrong;
}

evaluate (responses)

function showResults() {
  alert (user.name + " you answered " + user.correct_answers + " questions correctly and " + user.wrong_answers + " incorrectly. Thank you!")
}

showResults()
