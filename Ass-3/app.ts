// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Abdul rehman";

//In LowerCase

console.log(personName.toLowerCase());

//In uppperCase

console.log(personName.toUpperCase());

//In titleCase
console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));
