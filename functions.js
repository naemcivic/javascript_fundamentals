// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(nochild, spousename, geolocation, jobtitle) {
  console.log('you will be a ' + jobtitle + ' in ' + geolocation+ ', ' + 'and married to ' + spousename + ' with ' + nochild + ' kids');
}

tellFortune(7, 'Nicole', 'Toronto', 'an amazing web developer')
tellFortune(5, 'Philip', 'Toronto', 'top employee @ State Farm')


// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
var currentTime = new Date();
var year = currentTime.getFullYear();
function calculateAge(birthyear, currentyear) {
    console.log('You are ' + (currentyear - birthyear)  );
}

calculateAge(1980, year);
calculateAge(1985, year);
calculateAge(1984, year);


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age,amountperday){

  var MAX_AGE = 99
  var DAYS_IN_A_YEAR = 365

  console.log('You will need ' + (( ( MAX_AGE - age ) * 365 ) * amountperday ).toFixed() + ' to last you until the ripe old age of ' + MAX_AGE );
}

calculateSupply(36, 2.5)
calculateSupply(10, 3.3)
calculateSupply(25, 4.7)

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumfrence(radius){
  var pie = Math.PI
  console.log('The circumference is ' + ( pie * (radius * 2) ) );
}
calcCircumfrence(50);

function calcArea(radius){
  var pie = Math.PI
  console.log('The area is ' + ( pie * Math.pow(radius, 2) ) );
}

calcArea(10)
// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

(function celsiusToFahrenheit(){
  var celsius = 21
  console.log(celsius + 'C is ' + ( ((celsius * 1.8) + 32).toFixed() + 'F' ));
})();

(function fahrenheitToCelsius(){
  var fahrenheit = 70
  console.log(fahrenheit + 'F is ' +  ((fahrenheit - 32) * 5 /9).toFixed() + 'C');
})();
