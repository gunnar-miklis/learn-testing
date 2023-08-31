# Intro in Testing

## DevOps

Idea 💡 Code **`</>`**  Build ⚙️ Deploy 📦 Manage 🔍 Learn 📈

1. Userstory
2. Programming the Idea 
3. Executables
4. Runtime Environment
5. Production (and test)
6. Continuous Improvement.

<aside>
💡 Focus on People, Process, Tools for the benefit of business agility.

</aside>

## CI/CD

Purpose: to avoid “merge hell”.

Typically done by a CI/CD server/pipeline.

<aside>
💡 **Build. Test. Deploy.**
Continuous integration, automated testing and deployment.

</aside>

### STEP 1: CI – Continuous Integration

Commit, push/pull code constantly.

Each commit triggers automated (unit) tests.

<aside>
💡 Commit code to a shared repo frequently.

</aside>

### STEP 2: CD – Continuous Delivery/Deployment

If the CI tests are successful, commits will be deployed automatically.

Benefit: always have a testable and functional build.

<aside>
💡 Deploy code automatically.

</aside>

## Testing

### Mocking

<aside>
💡 Use sample data.

</aside>

### Strategies

- unit test
    - test individual units of code (e.g. single functions).
    - tools: e.g. `JEST`
- integration test
    - test multiple components & services and how they work together.
- e2e test
    - test entire apps, like an end user would do.
    - simulate human behavior (e.g. by clicking buttons automatically).
    - tools: e.g. `CYPRESS`
- performance test
- functional test
- etc.

### Order

1. Unit Tests (highest priority)
2. API Tests (high priority)
3. UI Tests (normal priority)
4. Exploratory Tests (mimic user behavior to find bugs/errors)
5. UX Tests (user experience)
6. Beta Test (5% of user base)


## Code Example with JEST

### file

- app.test.js

### code

```jsx
function sum( a, b ) {
	return a + b
}
```

### test

```jsx
// "test suite" = collection of tests
describe( 'My Feature', () => {
	
	// description of what is being tested
	// describing the behavior of the code
	it('finds the sum of a and b', () => {

		// run/execute code
		const result = sum( 2, 2 );
	
		// test some fixed sample data
		expect( result ).toEqual( 4 );
		expect( result ).not.toBe( null );
		expext( result ).toBeInstanceOf( Number );

	} );

} );
```
