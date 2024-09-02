// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// Store these pizza names in a array, and then use a for loop to print the name of each pizza.
var pizzaName = ["Fajita Pizza", "Chicken Pizza", "Tikka Pizza"];
for (var i = 0; i < pizzaName.length; i++) {
    console.log(pizzaName[i]);
}
;
//Modifying for loop to print a sentence using the name of the pizza
for (var i = 0; i < pizzaName.length; i++) {
    console.log("I like ".concat(pizzaName[i]));
}
var pizzas = [
    "I really enjoy a variety of pizzas.",
    "For a classic taste, I love a traditional Margherita with its fresh tomatoes, mozzarella, and basil.",
    "I also enjoy a hearty Pepperoni pizza with its spicy, crispy slices of pepperoni on top.",
    "When I'm in the mood for something a bit different, a BBQ Chicken pizza with tangy barbecue sauce and tender chicken is always a great choice."
];
for (var i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
