# JEST
Jest is a popular test framework for JavaScript.

## BASICS

### test() and it()
> _"[...] Furthermore, we use the `test` keyword to start a new test case definition. The `it` keyword is an alias for the `test` keyword. Personally, I like to use `it`, which allows for more natural language flow of writing tests. To give an example:"_

```
describe('Beverage()', () => {
   it('should be delicious', () => {
      expect(myBeverage.isDelicious).toBeTruthy();
   });
});
```

### beforeEach() and afterEach()
It's important to "prepare" and "clean up" tests.
Both  functions will run before or after all test, but only once.
```
describe( 'database testing', () => {

	beforeEach( () => {
		createDBConnection()
		initiateDatabase()
	})

	afterEach( () => {
		removeDatabase()
		destroyDBConnection()
	})

	test('if the chocoloate ice cream flavor is in stock', () => {
		expect( isIceCreamFlavorsInStock( 'chocolate' ) ).toBe( true )
	})

})
```

### Mocking
- Replace real parts of the code with "fake", controlled versions.
- It allows to simulate the behavior of certain functions/modules without actually executing the real code.
- Isolate, control and inspect specific parts of the code.
- It ensures tests are consistent and predictable. 
- A mock doesn't do anything itself. A mock is a simulated function that records or logs it's own behaviour.
```
// create a mock
const mockFn = jest.fn();	// Mock Functions
const mockM = jest.mock();	// Mock Modules

// call a mock
mockFn();

// test a mock
expect( mockFn ).toHaveBeenCalled();

// acccess the log object
mockFN.mock
mockFN.mock.calls
mockFN.mock.results
mockFN.mock.results[0].value
```


## SETUP

#### Install JEST.
```
$ yarn add --D jest
```

#### JEST config possible in `package.json` file.
```
"jest": {
	"verbose": true,
	"collectCoverage": true,
	"coverageReporters": ["json", "text", "html"],
	"displayName": "CUSTOM TEST"
},
"scripts": {
	"test": "jest"
},
"devDependencies": {
	"jest": "^29.6.4"
}
```

#### Execute JEST once.
```
$ yarn test
```

#### Continously testing (run JEST on file change).
```
$ yarn run test --watchAll
```

#### Display report in CLI `test` or in Browser `html`.
+ `coverageReporters: ["text", "html"]`
+ will be posted in directory: `coverage`