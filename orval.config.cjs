const schemaURL = `https://api.noona.is/hq/spec.yaml`;

module.exports = {
	NoonaAPI: {
		output: {
			mode: 'tags',
			target: 'api/index.ts',
			schemas: 'api/models',
			client: 'react-query',
			tsconfig: './tsconfig.json',
		},
		input: {
			target: schemaURL,
		},
	},
};
