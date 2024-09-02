// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_Shirt(size: string, message: string): void {
    console.log(`The T-shirt size is ${size}  "${message}".`);
}

// Call the function with sample arguments
make_Shirt('M', 'is it fit?');
