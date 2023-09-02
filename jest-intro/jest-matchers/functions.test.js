function myFn( num, str ) {
	return 'Done!';
}

test( 'use different matchers to test functions', () => {
	// mock function to call it "indirectly"
	const mockFn = jest.fn( myFn );
	mockFn( 123, 'word' );

	console.log( mockFn.mock );
	// log
	// {
	//   calls: [ [ 123, 'word' ] ],
	//   contexts: [ undefined ],
	//   instances: [ undefined ],
	//   invocationCallOrder: [ 1 ],
	//   results: [ { type: 'return', value: 'Done!' } ],
	//   lastCall: [ 123, 'word' ]
	// }
	console.log( mockFn.mock.results[0].value ); // :>> "Done!"

	expect( mockFn ).toHaveBeenCalled();
	expect( mockFn ).toHaveBeenCalledWith( 123, 'word' );
	expect( mockFn ).toHaveReturned();
	expect( mockFn ).toHaveReturnedWith( 'Done!' );
} );
