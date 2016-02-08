// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var numberOfChild = 1
var partnerName = 'Nicole'
var geoLocation = 'Toronto'
var jobTitle = 'web developer'
console.log ("You will be a "  + jobTitle + "in " + geoLocation +  " and married to " + partnerName + " with " +  numberOfChild + " child");

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = 2016
var birthYear = 1990
var birthYear2 = 1980
console.log("They are " + (currentYear - birthYear) + " or " + (currentYear - birthYear2) + " years old" );

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 36
var maxAge = 99
amPerDay = 2

console.log("you will need " + ((((maxAge - currentAge) * 365) * amPerDay)) + " to last you until the ripe old age of " + maxAge);



// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 50
console.log("The circumference is " + Math.PI * (radius * 2));



// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

tempInC = 21
tempInF = 74

console.log(tempInC + 'C is ' + ((tempInC * 1.8 )+ 32) + 'F');
console.log(tempInF + 'F is ' + (tempInF - 32) * ( 5  / 9 ) + 'C' );
