function addition( num1, num2 ) {
	return num1 + num2;
}

function substraction( num1, num2 ) {
	return num1 - num2;
}

function multiply( num1, num2 ) {
	return num1 * num2;
}

function divide( num1, num2 ) {
	return num1 / num2;
}

module.exports = {
	add: addition,
	sub: substraction,
	mul: multiply,
	div: divide,
};
