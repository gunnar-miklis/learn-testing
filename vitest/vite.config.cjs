import { defineConfig } from 'vitest/config';

export default defineConfig( {						// APP and TEST config, both in one file.
	plugins: [], 									//	* vite config, for example: "[ react() ]"
	test: {											//	* vitest config, for example...
		includeSource: [ 'src/*/*.{js}' ],
		coverage: {
			provider: 'v8',
			reporter: [ 'text', 'json', 'html' ],
		},
	},
} );
