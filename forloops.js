// Exercises: for loops

// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
for(i = 0; i <= 20; i++) {
  if(i % 2 === 0){
    console.log(i + ' is an even number');
  }else{
    console.log(i + ' is an odd number');
  }
}

// EXERCISE: Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for(i = 1; i <= 10; i++){
  for(i2 = 1; i2 <= 10; i2++){
    console.log(i + '*' + i2  + ' = ' + i * i2);
  }
}



// EXERCISE: The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
for(grade = 60; grade <= 100; grade++){
  if(grade <= 70){
    console.log("you got a C");
  }else if(grade <= 80){
    console.log("you got a B");
  }else{
    console.log("you got an A")
  }
}
