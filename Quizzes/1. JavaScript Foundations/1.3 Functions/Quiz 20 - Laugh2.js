/*
QUIZ 20: 

Directions:
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/


var laugh = function(num) {
  var string = "";
  for (i = 0; i < num; i++) {
    string += "ha";
  }
  
  return string + "!";
};

console.log(laugh(3));
