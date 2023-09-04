# Vitest
Vite's native test runner.
A fast unit test framework build-in with Vite.

## BENEFITS
- **ESM** (ES Module System, import/export) support!
- **One Config File** to handle both, application and testing!
- `Jest compatible`, adaption of Jest (includes most common features and uses the same syntax)!
- TypeScript and JSX support!
- Watch mode by default!
- Lightweight!


### Type Testing
```js
import {expectTypeOf} from 'vitest'
```
```js
expectTypeOf( () => 1 ).toBeFunction()
expectTypeOf( {} ).toBeObject()
expectTypeOf( [] ).toBeArray()
expectTypeOf( '' ).toBeString()
expectTypeOf( 1 ).toBeNumber()
expectTypeOf( true ).toBeBoolean()
expectTypeOf( () => {} ).returns.toBeVoid()
expectTypeOf( Promise.resolve(123) ).resolves.toBeNumber()
expectTypeOf( Symbol(1) ).toBeSymbol()
expectTypeOf( undefined ).toBeUndefined()
expectTypeOf( null ).toBeNull()
```

## SETUP

#### initiate project
```bash
$ yarn create vite <project name>
$ cd <project name>
$ yarn
```

#### add dependencies
```bash
$ yarn add -D vitest eslint
$ yarn run eslint --init
```

#### configure package.json
```js
scripts: {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest --coverage"
},
```

#### run test
```bash
$ yarn test
```