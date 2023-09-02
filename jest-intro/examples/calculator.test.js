const calculator = require( './calculator' );

// Readable "test-flow"
//	* describe "feature"...
//	* it should do XYZ...
//	* expect XYZ to [be/equal/etc] XYZ.

// "Test Suite", like a collection of tests
describe( 'calculator', () => {
	// description of what being test, and how the code behaves.
	it( 'should be a type number and should add 25 + 5 to equal 30', () => {
		// run/execute a sample code/data, etc.
		const result = calculator.add( 25, 5 );

		// run a tests
		expect( typeof result ).toBe( 'number' );
		expect( result ).toBe( 30 );
	} );

	it( 'should be a number and substract 25 - 5 to equal 20', () => {
		const result = calculator.sub( 25, 5 );
		expect( typeof result ).toBe( 'number' );
		expect( result ).toBe( 20 );
	} );

	it( 'should be a number and mulitply 25 * 5 to equal 125', () => {
		const result = calculator.mul( 25, 5 );
		expect( typeof result ).toBe( 'number' );
		expect( result ).toBe( 125 );
	} );

	it( 'should be a number and divide 25 / 5 to equal 5', () => {
		const result = calculator.div( 25, 5 );
		expect( typeof result ).toBe( 'number' );
		expect( result ).toBe( 5 );
	} );
} );
