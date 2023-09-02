const addNums = require( './addNums' );

test( 'add 10 + 5 to equal 15', () => {
	const result = addNums( 10, 5 );

	expect( result ).toBe( 15 );
} );
