module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
	},
	'extends': [
		'google',
		'eslint:recommended',
	],
	'overrides': [
		{
			'env': {
				'node': true,
			},
			'files': [
				'.eslintrc.{js,cjs}',
			],
			'parserOptions': {
				'sourceType': 'script',
			},
		},
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
	},
	'rules': {
		'no-console': 'off',
		'max-len': 'off',
		'space-in-parens': [
			'error',
			'always',
		],
		'array-bracket-spacing': [
			'error',
			'always',
		],
		'object-curly-spacing': [
			'error',
			'always',
		],
		'no-tabs': 0,
		'indent': [
			'error',
			'tab',
		],
		'require-jsdoc': [
			'error',
			{
				'require': {
					'FunctionDeclaration': false,
					'MethodDefinition': false,
					'ClassDeclaration': false,
					'ArrowFunctionExpression': false,
					'FunctionExpression': false,
				},
			},
		],
	},
};
