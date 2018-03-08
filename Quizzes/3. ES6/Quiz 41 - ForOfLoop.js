/*
QUIZ 41: Writing a For...of Loop (1-4)

Write a for...of loop that:

loops through each day in the days array
capitalizes the first letter of the day
and prints the day out to the console
Your code should log the following to the console:

Sunday
Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
*/


const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for(let day of days) {
  console.log(day[0].toUpperCase() + day.slice(1));
}
