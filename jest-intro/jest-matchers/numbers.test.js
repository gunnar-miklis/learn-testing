test( 'use different matchers to test numbers', () => {
	const num = 10 - 5;

	expect( typeof num ).toBe( 'number' );
	expect( num ).toBe( 5 );
	expect( num ).toBeGreaterThan( 0 );
	expect( num ).toBeLessThanOrEqual( 5 );
	expect( num ).toBeDefined();
	expect( num ).toBeTruthy();
	expect( num ).not.toBeFalsy();
	expect( num ).not.toBeNull();
})