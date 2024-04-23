// Create the array of ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Subtract the first element from the last element
//lastIndex function finds the last element in the array
let lastIndex = ages.length - 1;
let subtractionResult = ages[lastIndex] - ages[0];
console.log("Subtraction result:", subtractionResult);



// Calculate the average age using a loop
let totalAge = 0;
for (let i = 0; i < ages.length; i++) {
    totalAge += ages[i];
}
let averageAge = totalAge / ages.length;
console.log("Average age:", averageAge);




// Create the array of names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Calculate the average number of letters per name using a loop
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
let averageLettersPerName = totalLetters / names.length;
console.log("Average number of letters per name:", averageLettersPerName);

// Concatenate all the names together, separated by spaces, using a loop
let concatenatedNames = '';
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i];
    if (i !== names.length - 1) {
        concatenatedNames += ' ';
    }
}
console.log("Concatenated names:", concatenatedNames);




//How do you access the last element of any array? because of zero indexing, the last element will be the length of the array minus 1 to account for starting at 0
let lastElement = ages[ages.length -1];
console.log("The last element of the ages array is", lastElement);



//How do you access the first element of any array? the first element starts in the 0 spot because of zero indexing
let firstElement = ages[0];
console.log("The first element of the ages array is", firstElement);




// Create an empty array to store the lengths of names
let nameLengths = [];

// Write a loop to iterate over the names array and add the length of each name to nameLengths array
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}

console.log("Name lengths:", nameLengths);





// Initialize a variable to store the sum
let sum = 0;

// Write a loop to iterate over the nameLengths array and calculate the sum of all elements
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}

console.log("Sum of name lengths:", sum);



function concatenateWord(word, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
}

// Example usage:
let concatenatedString = concatenateWord('Hello', 3);
console.log(concatenatedString); 
