test( 'use different matchers to test objects', () => {
	const obj = {
		'red': '#ff0000',
		'green': '#00ff00',
		'blue': '#0000ff'
	};

	expect( obj ).not.toStrictEqual( {
		'blue': '#0000ff',
		'green': '#00ff00',
	} );
	expect( obj ).toHaveProperty( 'green' )
	expect( obj ).toHaveProperty( 'green', '#00ff00' )
})