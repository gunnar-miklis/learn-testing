const calculator = require( './calculator' );

// "Test Suite", like a collection of tests
describe( 'simple calculator example', () => {
	
	// description of what being test, and how the code behaves.
	it('adds 25 + 5 to equal 30', () => {
		// run/execute a sample code/data
		const resultOfAdd = calculator.add( 25, 5 );

		// run some tests
		expect( typeof resultOfAdd ).toBe( 'number' );
		expect( resultOfAdd ).toBe( 30 );
	})
	it('substract 25 - 5 to equal 20', () => {
		const resultOfSub = calculator.sub( 25, 5 );
		expect( typeof resultOfSub ).toBe( 'number' );
		expect( resultOfSub ).toBe( 20 );
	})
	it('mulitplies 25 * 5 to equal 125', () => {
		const resultOfMul = calculator.mul( 25, 5 );
		expect( typeof resultOfMul ).toBe( 'number' );
		expect( resultOfMul ).toBe( 125 );
	})
	it('divides 25 / 5 to equal 5', () => {
		const resultOfDiv = calculator.div( 25, 5 );
		expect( typeof resultOfDiv ).toBe( 'number' );
		expect( resultOfDiv ).toBe( 5 );
	})
})