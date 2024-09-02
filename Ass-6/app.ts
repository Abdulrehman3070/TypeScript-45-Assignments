//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// Store a person's name with leading and trailing whitespace
let Name: string = "\t\n  Abdul Rehman  \n\t";

// Print the name with whitespace
console.log("Name with whitespace:");
console.log(Name);

// Strip the whitespace
let strippedName: string = Name.trim();

// Print the name after stripping whitespace
console.log("Name after stripping whitespace:");
console.log(strippedName);
