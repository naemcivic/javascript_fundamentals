// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(number1, number2){
  if(number1 > number2){
    console.log(number1 + ' is greather then ' + number2);
  }else {
    console.log(number2 + ' is greater then ' + number1);
  }
}



// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.


  function helloWorld(code){
  if(code == 'es'){
    console.log('Hola Mundo');
  }else if(code == 'de') {
    console.log('Hallo Welt');
  }else{
    console.log('Hello World');
  }
}

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(numberScore){
  if(numberScore <= 40 ){
    console.log('F');
  }else if(numberScore <= 60){
    console.log('D');
  }else if(numberScore <= 70){
    console.log('C');
  }else if(numberScore <= 80){
    console.log('B');
  }else {
    console.log('A')
  }
}

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
function pluralize(noun, number){
  if(number < 2){
    console.log(number +''+ noun);
  }else {
    console.log(number +' '+noun + 's')
  }

}
