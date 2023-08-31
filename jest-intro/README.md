

### SETUP

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