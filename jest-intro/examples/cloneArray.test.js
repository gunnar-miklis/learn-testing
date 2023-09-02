const cloneArray = require( './cloneArray' );

test( 'make sure the array is a copy, not just a reference', () => {
	const result = cloneArray( [ 1, 2, 3 ] );

	expect( result ).not.toBe( [ 1, 2, 3 ] ); // yes, it's the same structure, but also same reference.
	expect( result ).toEqual( [ 1, 2, 3 ] ); // yes, it's the same structure, but with different references.
} );
