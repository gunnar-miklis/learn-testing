test( 'use different matchers to test arrays', () => {
	const array = [
		'red',
		'green',
		'blue'
	] ;

	expect( array ).toEqual( [ 'red', 'green', 'blue' ] );
	expect( array ).toContain( 'blue' );
	expect( array ).toHaveLength( 3 )
})