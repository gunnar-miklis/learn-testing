function myFn(num, str) {
	return 'Done!';
}

test( 'use different matchers to test functions', () => {
	
	// mock function to call it "indirectly"
	const mockFn = jest.fn( myFn )
	mockFn( 123, 'word');

	expect( mockFn ).toHaveBeenCalled();
	expect( mockFn ).toHaveBeenCalledWith( 123, 'word' );
	expect( mockFn ).toHaveReturned();
	expect( mockFn ).toHaveReturnedWith( 'Done!' );
})