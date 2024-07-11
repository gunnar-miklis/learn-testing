import { describe, it, expect, expectTypeOf } from 'vitest';
import sum from './sum';

describe( 'sum function', () => {
	it( 'should sum all numbers in the array', () => {
		const result = sum( [ 1, 2, 3, 4, 5, 6 ] );
		expect( result ).toBe( 21 );
	} );

	it( 'should return 0 if the array is empty', () => {
		const result = sum( [] );
		expect( result ).toBe( 0 );
	} );

	it( 'should return the number, if there is only one array entry', () => {
		const result = sum( [ 15 ] );
		expect( result ).toBe( 15 );
	} );

	it( 'should be a type of number', () => {
		const result = sum( [ 1, 2, 3 ] );
		expectTypeOf( result ).toBeNumber();
	} );
} );
