// question 1.
// only logging the counter variable if it is an even number
/* the modulus returning the value of the remainder of 
the division left value divided by right value */

for (var i = 15; i < 26; i++) {
	if (i % 2 === 0) {
		console.log("The counter variable is the even number " + i);
	}
}
/* The counter variable is the even number 16
The counter variable is the even number 18
The counter variable is the even number 20
The counter variable is the even number 22
The counter variable is the even number 24 */

// question 2.
// a. creating function logging the sentence "I am a function"
// b. assigning the function to var called innerFunction
// c. creating function called "outerFunction" accepting one argument
// d. inside "outerFunction" calling the argument like you would a function
// e. calling "outerFunction" passing in the "innerFunction" variable

function logWhatIAm() {
	console.log("I am a function");
}

var innerFunction = function logWhatIAm() {
	console.log("I am a function");
};

function outerFunction(innerFunction) {
	innerFunction();
}

outerFunction(innerFunction);
