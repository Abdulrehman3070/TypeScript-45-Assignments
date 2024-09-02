//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// I worked with program 16
// Original guest list
var guests = ["Amir", "Shahid", "Danish"];
// Inform about the bigger dinner table
console.log("Dear ".concat(guests[0], ",Good news! We found a bigger dinner table, so we can invite more guests."));
console.log("Dear ".concat(guests[1], ",Good news! We found a bigger dinner table, so we can invite more guests."));
console.log("Dear ".concat(guests[2], ".Good news! We found a bigger dinner table, so we can invite more guests."));
// Add more guests
guests.unshift("Asif");
guests.splice(Math.floor(guests.length / 2), 0, "Hassan"); // Add a new guest to the middle
guests.push("Zain"); // Append a new guest to the end
// Print a new set of invitation messages
console.log("Dear ".concat(guests[0], ", I would like to invite you to dinner. It would be an honor to have you as my guest."));
console.log("Dear ".concat(guests[1], ", I would like to invite you to dinner. It would be an honor to have you as my guest."));
console.log("Dear ".concat(guests[2], ", I would like to invite you to dinner. It would be an honor to have you as my guest."));
console.log("Dear ".concat(guests[3], ", I would like to invite you to dinner. It would be an honor to have you as my guest."));
console.log("Dear ".concat(guests[4], ", I would like to invite you to dinner. It would be an honor to have you as my guest."));
console.log("Dear ".concat(guests[5], ", I would like to invite you to dinner. It would be an honor to have you as my guest."));
console.log("Dear ".concat(guests[6], ", I would like to invite you to dinner. It would be an honor to have you as my guest."));
// print a message indicating the number of people you are inviting to dinner.
console.log(guests.length, "peoples are inviting on Dinner");
