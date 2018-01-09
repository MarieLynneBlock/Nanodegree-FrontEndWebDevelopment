/*
Using the umbrella example from the previous lesson, see if you can follow the example open() method and create the close()
method. It's alright if you have trouble at first! We'll go into more detail later in this lesson.


TIP: Remember to put all of your object's properties and methods inside curly braces: var myObject = { greeting: "hello",
name: "Julia" };. Also, remember that an object is just another data type. Just like how you would put a semicolon after a
string variable declaration var myString = "hello";, don't forget to put a semi-colon at the end of your object's declaration.
 */
 

var umbrella = {
    color: "pink",
    isOpen: false,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        }
        else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    
    isClose: true,
    close: function() {
      if (umbrella.isClosed === true) {
        return "The umbrella is already closed!"; 
      }
      else {
        umbrella.isClosed = true; 
        umbrella.isOpen = false; 
        return "Julia closes the umbrella"; 
      }
    },  
};
