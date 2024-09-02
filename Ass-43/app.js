// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Function to print each magician's name
function show_magicians(magicians) {
    console.log(magicians);
}
// Function to modify a copy of the array of magicians by adding "the Great"
function make_great(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "The Great ".concat(magician); });
    return greatMagicians;
}
// Array of magician names
var originalMagicians = ["David Copperfield", "Houdini", "Penn & Teller", "Dynamo"];
// Create a copy and modify it
var greatMagicians = make_great(originalMagicians);
// Call show_magicians() to display both arrays
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("Great Magicians:");
show_magicians(greatMagicians);
