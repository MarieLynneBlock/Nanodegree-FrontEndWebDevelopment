/*
QUIZ 15:

Write a for loop that prints out the factorial of the number 12:

A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6

3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
Save your final answer in a variable called solution and print it to the console.
*/


var solution = 1;

for (var i = 12; i >= 1; i--) {
    solution *= i;
}

console.log(solution);


