# Intro in Testing
- DevOps
- CI/CD
- Testing
- Example


&nbsp;
## DevOps
➡️ Focus on People, Processes and Tools for the benefit of business agility.

1. **💡 Idea**, Userstories
2. **`</>` Code**, Programming the Idea 
3. **⚙️ Build**, Executables
4. **📦 Deploy**, Runtime Environment
5. **🔍 Manage**, Production (and Testing)
6. **📈 Learn**, Continuous Improvement

   


&nbsp;
## CI/CD
➡️ **Build. Test. Deploy.** Continuous integration, automated testing and deployment.
- Purpose: to avoid “merge hell”.
- Typically done by a CI/CD server/pipeline.
- Benefit: always have a testable and functional build.

### 1. CI – Continuous Integration
➡️ Commit code to a shared repo frequently.
- Commit, push/pull code constantly.
- Each commit triggers automated (unit) tests.
  
### 2. CD – Continuous Delivery/Deployment
➡️ Deploy code automatically.
- If the CI tests are successful, commits will be deployed automatically.
  



&nbsp;
## Testing

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

### Mocking
➡️ Use sample data. Simulate (data) input.



&nbsp;
&nbsp;
## Code Example with JEST
### file
- sum.js
- sum.test.js

### code in sum.js
```jsx
function sum( a, b ) {
	return a + b
}
```

### test in sum.test.js
```jsx
// "test suite" = collection of tests
describe( 'My Feature', () => {
	
	// description of what is being tested
	// describing the behavior of the code
	it('finds the sum of a and b', () => {

		// run/execute code
		const result = sum( 2, 2 );
	
		// test some fixed sample data
		expext( typeof result ).toBe( 'number' );
		expect( result ).toEqual( 4 );
		expect( result ).not.toBe( null );	
	} );
} );
```
