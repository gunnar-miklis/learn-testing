test( 'use different matchers to test errors', () => {
	function err( message ) {
		throw new Error( message );
	}

	expect( () => err() ).toThrow();
	expect( () => err() ).toThrow( Error );
	expect( () => err( '404 Not found!' ) ).toThrow( /404/ );
	expect( () => err( 'Something went wrong!' ) ).toThrow( 'Something went wrong!' );
} );
