// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var currentUsers = ['bilal', 'Altaf', 'Farooq', 'Mustafa', 'khalid'];
var newUsers = ['Bilal', 'Behroze', 'KHALID ', 'Maqbool', 'Amir'];
// Convert currentUsers to lowercase for case-insensitive comparison
var lowerCaseCurrentUsers = currentUsers.map(function (user) { return user.toLowerCase(); });
// Function to check that if a new username is available
function checkUsernameAvailability(username) {
    var lowerCaseUsername = username.trim().toLowerCase();
    if (lowerCaseCurrentUsers.indexOf(lowerCaseUsername) !== -1) {
        return "The username \"".concat(username, "\" is already taken. Please enter a new username.");
    }
    else {
        return "The username \"".concat(username, "\" is available.");
    }
}
// using for of loop
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    console.log(checkUsernameAvailability(newUser));
}
