// //Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// Original guest list
let guests: string[] = ["Asif", "Amir", "Hassan", "Shahid", "Danish", "Zain"];

// Inform about the dinner table change
let message:string ="Unfortunately, the new dinner table won't arrive in time, and we have space for only two guests.";

// Remove guests one at a time and notify them
console.log(`Sorry ${guests.pop()}, we can't invite you to dinner.`);
console.log(`Sorry ${guests.pop()}, we can't invite you to dinner.`);
console.log(`Sorry ${guests.pop()}, we can't invite you to dinner.`);
console.log(`Sorry ${guests.pop()}, we can't invite you to dinner.`);

// Print messages for the remaining guests
console.log(`Dear ${guests.pop()}, I would like to invite you to dinner. It would be an honor to have you as my guest.`);
console.log(`Dear ${guests.pop()}, I would like to invite you to dinner. It would be an honor to have you as my guest.`);

// Remove the last two guests
guests.pop()
guests.pop()
// Print the list to ensure it's empty
console.log("Final guest list:", guests);
