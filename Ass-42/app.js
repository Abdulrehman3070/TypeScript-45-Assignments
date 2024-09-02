// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians = ["David Copperfield", "Houdini", "Penn & Teller", "Dynamo"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log("The Great ".concat(magicians[i]));
    }
}
function show_magicians(magicianss) {
    console.log(magicianss);
}
;
make_great(magicians);
show_magicians(magicians);
