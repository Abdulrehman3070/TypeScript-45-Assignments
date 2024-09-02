// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the  guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.


// Original guest list
let guests: string[] = ["Amir", "Saqib", "Danish"];

// Update the guest list by replacing the guest who can't make it
guests[1] = "Shahid"; 

// Print a new set of invitation messages
console.log(`Dear ${guests[0]}, I would like to invite you to dinner. It would be an honor to have you as my guest.`);
console.log(`Dear ${guests[1]}, I would like to invite you to dinner. It would be an honor to have you as my guest.`);
console.log(`Dear ${guests[2]}, I would like to invite you to dinner. It would be an honor to have you as my guest.`);
