/*
QUIZ 8:

In 2015, the U.S. Bureau of Labor Statistics conducted research to reveal how average salary is directly related to the number of years spent in school. In their findings, they found that people with:

no high school diploma earned an average of $25,636/year,
a high school diploma earned an average of $35,256/year,
an Associate's degree earned an average of $41,496/year,
a Bachelor's degree earned an average of $59,124/year,
a Master's degree earned an average of $69,732/year,
a Professional degree earned an average of $89,960/year,
and a Doctoral degree earned an average of $84,396/year.
NOTE: Wondering what the average salary would be for a person with a Nanodegree from Udacity? That's a hard question to answer, but that doesn't mean we haven't tried to quantify the value of our Nanodegrees. Click here to read more about Nanodegrees from resident Udacity writer Chris Watkins.
Directions:
Write a switch statement to set the average salary of a person based on their type of completed education.

Afterwards, print the following to the console.

In 2015, a person with __________ earned an average of __________/year.
Fill in the blanks with the type of education and the expected average salary. Make sure to use correct grammar in your printed statement. For help, refer to the findings above.

In 2015, a person with a Bachelor's degree earned an average of $59,124/year.
TIP: To print out the average salary with commas (i.e. 59,124), use the toLocaleString() method and pass it the locale "en-US". For example, salary.toLocaleString("en-US").
TIP: Make sure to test your code with different values. For example,

If education equals "an Associate's degree", then In 2015, a person with an Associate's degree earned an average of $41,496/year. should be printed to the console.
*/

// change the value of `education` to test your code
var education = "no high school diploma";

// set the value of this based on a person's education
var salary;

switch  (education) {
    case "no high school diploma":
        salary = "$25,636/year";
        console.log("In 2015, a person with " +  education + " earned an average of " + salary.toLocaleString("en-US") + ".");
        break;
        
    case "a high school diploma":
        salary = "$35,256/year";
        console.log("In 2015, a person with " +  education + " earned an average of " + salary.toLocaleString("en-US") + ".");
        break;
        
    case "an Associate's degree":
        salary = "$41,496/year";
        console.log("In 2015, a person with " +  education + " earned an average of " + salary.toLocaleString("en-US") + ".");
        break;
        
    case "a Bachelor's degree":
        salary = "$59,124/year";
        console.log("In 2015, a person with " +  education + " earned an average of " + salary.toLocaleString("en-US") + ".");
        break;
        
    case "a Master's degree":
        salary = "$69,732/year";
        console.log("In 2015, a person with " +  education + " earned an average of " + salary.toLocaleString("en-US") + ".");
        break;
        
    case "a Professional degree":
        salary = "$89,960/year";
        console.log("In 2015, a person with " +  education + " earned an average of " + salary.toLocaleString("en-US") + ".");
        break;
        
    case "a Doctoral degree":
        salary = "$84,396/year";
        console.log("In 2015, a person with " +  education + " earned an average of " + salary.toLocaleString("en-US") + ".");
        break;
        
    default:
        console.log ("nothing");
        break;
}
