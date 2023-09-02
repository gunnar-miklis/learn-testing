function subNums( num1, num2 ) {
	return num1 - num2;
}

// Show an example on how JEST deals with stuff like this...
function untestedCode() {
	console.log(
		'This is untested Code. JEST will notify about this: "6 Uncovered Lines. 66% coverage.',
	);
}

module.exports = subNums;
