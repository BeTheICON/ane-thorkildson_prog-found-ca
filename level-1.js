// question 1.
// Declaring and initializing a variable with a string value

var degreeOfCrazy = "moderately";
console.log(degreeOfCrazy);
// moderately

// question 2.
// Creating object "person" giving it two properties

var person = {
	nationality: "Norwegian",
	height: 152,
};

console.log(person);
// Object { nationality: "Norwegian", height: 152 }

// question 3.
// a. Creating variable "outOfStock" assigning it a bolean value

var outOfStock = true;

/* b. creating if statement checking the value "outOfStock".
If true, console log "Out of stock",otherwise console log "In stock" */

if (outOfStock === true) {
	console.log("Out of stock");
} else {
	console.log("In stock");
}

// question 4.
// a. Creating array with 5 numbers

var numberArray = [10, 20, 30, 40, 50];

// b. Looping through array console logging each value

for (var i = 0; i < numberArray.length; i++) {
	console.log(numberArray[i]);
}
// 10, 20, 30, 40, 50

// question 5.
/* Creating a "for loop" counting from 15 to 25.
Console logging value of the counter variable inside the loop */

for (var i = 15; i < 26; i++) {
	console.log(i);
}
// 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25

// question 6.
// Using loop from 5, only logging variable if equal to 20
for (var i = 15; i < 26; i++) {
	if (i === 20) {
		console.log("the counter variable equals 20");
	}
}
// the counter variable equals 20

// question 7.
/* a. Creating array of two objects, each with 3 properties; 
1 string, 1 number, and 1 bolean value */

var personOfInterestArray = [
	{
		gender: "Woman",
		degreeOfRationality: 24.5,
		rational: false,
	},
	{
		gender: "Hen",
		degreeOfRationality: 85,
		rational: true,
	},
];
console.log(personOfInterestArray);
/* 0: Object { gender: "Woman", degreeOfRationality: 24.5, rational: false }
​1: Object { gender: "Hen", degreeOfRationality: 85, rational: true }
​length: 2 */

// b. Looping through array console logging number and bolean value
for (var i = 0; i < personOfInterestArray.length; i++) {
	console.log(personOfInterestArray[i].degreeOfRationality);
	console.log(personOfInterestArray[i].rational);
}
// 24.5, false, 85, true

// question 8.
/* a. creating function "whatIDontLike" accepting one well-named argument
b. logging string "I don't like" together with argument
c. calling the function of choice */

function whatIDontLike(foodIDontLike) {
	console.log("I don't like " + foodIDontLike);
}

whatIDontLike("liver");
// I don't like liver

// question 9.
/* a. creating function accepting two arguments
b. subtracting second argument from the first
c. consol logging the result */

function subtractNumbers(firstNumber, secondNumber) {
	var sum = secondNumber - firstNumber;
	console.log(sum);
}

subtractNumbers(10, 20);
// 10

// question 10.
/* a. creating empty array
b. creating function accepting one argument
c. adding argument to the array
d. call the function */

var moodArray = [];
console.log(moodArray);
// Array, length: 0

function moodOfTheDay(myCurrentMood) {
	moodArray.push(myCurrentMood);
	console.log("Today I am " + myCurrentMood);
}

moodOfTheDay("happy");
// Today I am happy
// Array, 0: "happy", length: 1
