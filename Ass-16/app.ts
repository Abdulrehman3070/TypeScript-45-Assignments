// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// Original guest list
let guests: string[] = ["Amir", "Shahid", "Danish"];

// Inform about the bigger dinner table
console.log(`Dear ${guests[0]},Good news! We found a bigger dinner table, so we can invite more guests.`);
console.log(`Dear ${guests[1]},Good news! We found a bigger dinner table, so we can invite more guests.`);
console.log(`Dear ${guests[2]}.Good news! We found a bigger dinner table, so we can invite more guests.`);


// Add more guests
guests.unshift("Asif");
guests.splice(Math.floor(guests.length / 2), 0, "Hassan"); // Add a new guest to the middle
guests.push("Zain"); // Append a new guest to the end

// Print a new set of invitation messages

console.log(`Dear ${guests[0]}, I would like to invite you to dinner. It would be an honor to have you as my guest.`);
console.log(`Dear ${guests[1]}, I would like to invite you to dinner. It would be an honor to have you as my guest.`);
console.log(`Dear ${guests[2]}, I would like to invite you to dinner. It would be an honor to have you as my guest.`);
console.log(`Dear ${guests[3]}, I would like to invite you to dinner. It would be an honor to have you as my guest.`);
console.log(`Dear ${guests[4]}, I would like to invite you to dinner. It would be an honor to have you as my guest.`);
console.log(`Dear ${guests[5]}, I would like to invite you to dinner. It would be an honor to have you as my guest.`);
console.log(`Dear ${guests[6]}, I would like to invite you to dinner. It would be an honor to have you as my guest.`);



