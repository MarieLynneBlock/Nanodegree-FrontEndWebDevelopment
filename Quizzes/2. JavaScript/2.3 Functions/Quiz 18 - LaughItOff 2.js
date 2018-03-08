/*
QUIZ 18:

Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.

TIP: You might need a loop to solve this!
Here's an example of the output and how to call the function that you will write:

console.log(laugh(3));

Note:
- make sure your the final character is an exclamation mark ("!")
*/


function laugh(num) {
    
    var ha = "";
    
    for(var i = 0; i < num; i = i + 1) {
        ha += "ha";
        string = ha + "!";
    }
    
    return string;
}


console.log(laugh(3));
