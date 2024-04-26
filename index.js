// Create the array of ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Subtract the first element from the last element
// lastIndex finds the last element in the array, then after its found it subtracts the first element
let lastIndex = ages.length - 1;
let subtractionResult = ages[lastIndex] - ages[0];
console.log("Subtraction result:", subtractionResult);



// Calculate the average age using a loop. we use the loop to count the total age then divide it by how many ages we have to get the average.
let totalAge = 0;
for (let i = 0; i < ages.length; i++) {
    totalAge += ages[i];
}
let averageAge = totalAge / ages.length;
console.log("Average age:", averageAge);




// Create the array of names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Calculate the average number of letters per name using a loop. this loop is similar to the age average above but it counts characters instead of numbers
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




// How do you access the last element of any array? because of zero indexing, the last element will be the length of the array minus 1 to account for starting at 0
let lastElement = ages[ages.length -1];
console.log("The last element of the ages array is", lastElement);



// How do you access the first element of any array? the first element starts in the 0 spot because of zero indexing
let firstElement = ages[0];
console.log("The first element of the ages array is", firstElement);




// Create an empty array to store the lengths of names
let nameLengths = [];

// Write a loop to iterate over the names array and add the length of each name to nameLengths array. the code retrieves the lengths, and then pushes them to the new array I made
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


// function that repeats a word 'n' amount of times
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



// Full Name Function
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

let fullName = getFullName('John', 'Doe');
console.log("Your full name is:", fullName); 


// function that adds the sum of numbers in array. In the example the array's sum is 110 so the output is true
function isSumGreaterThan100(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum > 100;
}

// Example usage:
let numbersArray = [20, 30, 60]; // Sum is 110
console.log("Is sum greater than 100?", isSumGreaterThan100(numbersArray)); // Output: true



// Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

// Example usage:
let numbersArray2 = [10, 20, 30, 40, 50];
console.log("Number array average:", calculateAverage(numbersArray2)); // Output: 30



// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function isAverageGreaterThan(arr1, arr2) {
    // Calculate average of elements in arr1
    let sum1 = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
    }
    let average1 = sum1 / arr1.length;

    // Calculate average of elements in arr2
    let sum2 = 0;
    for (let i = 0; i < arr2.length; i++) {
        sum2 += arr2[i];
    }
    let average2 = sum2 / arr2.length;

    // Compare averages and return result
    return average1 > average2;
}

// Example usage:
let array1 = [10, 20, 30];
let array2 = [5, 15, 25];
console.log("Is array1 greater than array2?", isAverageGreaterThan(array1, array2)); 


// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
// the output will be true if it is hot outside AND we have more than $10.50
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

// Example usage:
let hotOutside = true;
let money = 15.50;
console.log("Will I buy a drink?", willBuyDrink(hotOutside, money)); 



// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// Convert the string to an array of characters, reverse it, and then join the characters back into a string. I wrote it to test out different string codes.
// With some more code you could also use this function to determine if words are palindromes  
function reverseString(str) {
   
    return str.split('').reverse().join('');
}

// Example usage:
let inputString = "racecar";
console.log(reverseString(inputString)); 

