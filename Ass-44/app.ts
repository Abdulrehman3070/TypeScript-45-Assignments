// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length > 0) {
        console.log(`- ${items.join('\n- ')}`);
    } else {
        console.log("No items selected.");
    }
    console.log(); 
}

// Call the function with different numbers of arguments
makeSandwich("Lettuce", "Tomato", "Turkey", "Cheese");
makeSandwich("Ham", "Mustard");
makeSandwich();
