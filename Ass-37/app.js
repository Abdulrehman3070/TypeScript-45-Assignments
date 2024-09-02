// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size, message) {
    if (size === void 0) { size = 'L'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The T-shirt size is ".concat(size, " and it will have the message: \"").concat(message, "\"."));
}
// Call the function to make a large shirt with the default message
makeShirt();
// Call the function to make a medium shirt with the default message
makeShirt('M');
// Call the function to make a shirt of any size with a different message
makeShirt('S', 'TypeScript is awesome!');
