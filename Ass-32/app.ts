// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let currentUsers: string[] = ['bilal', 'Altaf', 'Farooq', 'Mustafa', 'khalid'];

let newUsers: string[] = ['Bilal', 'Behroze', 'KHALID ', 'Maqbool', 'Amir'];

// Convert currentUsers to lowercase for case-insensitive comparison
let lowerCaseCurrentUsers = currentUsers.map(user => user.toLowerCase());

// Function to check that if a new username is available
function checkUsernameAvailability(username: string): string {
    const lowerCaseUsername = username.trim().toLowerCase();
    if (lowerCaseCurrentUsers.indexOf(lowerCaseUsername) !== -1) {
        return `The username "${username}" is already taken. Please enter a new username.`;
    } else {
        return `The username "${username}" is available.`;
    }
}

// using for of loop
for (const newUser of newUsers) {
    console.log(checkUsernameAvailability(newUser));
}
