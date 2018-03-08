/*
QUIZ 3

A murder mystery is a game typically played at parties wherein one of the partygoers is secretly, and unknowingly, playing a murderer,
and the other attendees must determine who among them is the criminal.
Since this might be your first time playing a murder mystery, we've simplified things quite a bit to make it easier. Here's what we know! In this murder mystery there are:

four rooms: the ballroom, gallery, billiards room, and dining room,
four weapons: poison, a trophy, a pool stick, and a knife,
and four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.
We also know that each weapon corresponds to a particular room, so...

the poison belongs to the ballroom,
the trophy belongs to the gallery,
the pool stick belongs to the billiards room,
and the knife belongs to the dining room.
And we know that each suspect was located in a specific room at the time of the murder.

Mr. Parkes was located in the dining room.
Ms. Van Cleve was located in the gallery.
Mrs. Sparr was located in the billiards room.
Mr. Kalehoff was located in the ballroom.
To help solve this mystery, write a combination of conditional statements that:

sets the value of weapon based on the room and
sets the value of solved to true if the value of room matches the suspect's room
*/


var room = "gallery";             // Change to test different cases
var suspect = "Ms. Van Cleve";    // Change to test different cases

var weapon = "";
var solved = false;



if (room === "dining room" && suspect === "Mr. Parkes") {
    weapon = "knife";
    solved = true;
}

else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick";
    solved = true;
}

else if (room === "gallery" &&  suspect === "Ms. Van Cleve") {
    weapon = "trophy";
    solved = true;
}

else if (room === "ballroom" &&  suspect === "Mr. Kalehoff") {
    weapon = "poison";
    solved = true;
}

if (solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
