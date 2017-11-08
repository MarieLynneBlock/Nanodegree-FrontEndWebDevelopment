/*
QUIZ 10:

Write a loop that prints out the following song. Starting at 99, and ending at 1 bottle.

99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
...
2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!
Some Notes:

* Note the pluralization of the word "bottle" when you go from 2 bottles to 1 bottle.
* Your text editor may try to autocorrect your ellipses ... to the ellipses character … Do not use the ellipses character for this quiz.
*/


var num = 99;

while ( num >= 1) {
    
    if (num > 2) {
    console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num -1) + " bottles of juice on the wall!");
    }
    
    else if(num === 2) {
        console.log(num + " bottles of juice on the wall! "+ num + " bottles of juice! Take one down, pass it around... " + (num -1) + " bottle of juice on the wall!");
    }
    
    else {
        console.log(num + " bottle of juice on the wall! "+ num + " bottle of juice! Take one down, pass it around... " + (num -1) + " bottles of juice on the wall!");
    }
    
    num --;
}
