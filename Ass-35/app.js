// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animals = ["Monkey", "Gorilla", "Chimpanzee"];
// using a for loop to print out the name of each animal. 
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
;
// print a statement about each animal, such as A dog would make a great pet. 
var sentence = ["Monkeys are known for their playful and agile nature.",
    "Gorillas are the largest primates and are known for their strength and gentle behavior.",
    "Chimpanzees are highly intelligent and share many behaviors with humans."];
for (var i = 0; i < animals.length; i++) {
    console.log(sentence[i]);
}
//thing that is common
console.log("All three have opposable thumbs, which allow them to grasp objects with great precision.");
