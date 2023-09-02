const subNums = require( './subNums' );

test( 'substract 10 - 5 to equal 5', () => {
	const result = subNums( 10, 5 );

	expect( result ).not.toBeNaN();
	expect( result ).toBe( 5 );
} );
