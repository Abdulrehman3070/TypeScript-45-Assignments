// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function makeShirt(size: string = 'L', message: string = 'I love TypeScript'): void {
    console.log(`The T-shirt size is ${size} and it will have the message: "${message}".`);
}

// Call the function to make a large shirt with the default message
makeShirt();

// Call the function to make a medium shirt with the default message
makeShirt('M');

// Call the function to make a shirt of any size with a different message
makeShirt('S', 'TypeScript is awesome!');
