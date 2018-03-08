/*
QUIZ 19:

For this quiz, you're going to create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will return the string representation of a triangle. See the example output below.

buildTriangle(10);
Returns:

* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * * 
* * * * * * * 
* * * * * * * * 
* * * * * * * * * 
* * * * * * * * * *


We've given you one function makeLine() to start with. The function takes in a line length, and builds a line of asterisks and returns the line with a newline character.

  function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
      line += "* "
    }
    return line + "\n";
  }
  
You will need to call this makeLine() function in buildTriangle().

This will be the most complicated program you've written yet, so take some time thinking through the problem before diving into the code. What tools will you need from your JavaScript tool belt? Professionals plan out their code before writing anything. Think through the steps your code will need to take and write them down in order. Then go through your list and convert each step into actual code. Good luck!
*/


// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// Build Triangle
function buildTriangle(width) {
  var triangle = "";
  
  for (i = 0; i <= width; i++) {
    triangle += makeLine(i);
    console.log(makeLine(i));
  }
}


// test your code by uncommenting the following line
console.log(buildTriangle(10));
