test( 'use different matchers to test strings', () => {
	const str = 'hello'

	expect( typeof str ).toBe( 'string' );
	expect( str ).toMatch(/hello/);
	expect( str ).toMatch(/[a-z]/g);
	expect( `HTTPS://${str}.world.com` ).toMatch(/(^https:\/\/).+(.\w.+$)/i);
})