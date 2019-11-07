import typescript from 'rollup-plugin-typescript2';

export default {
	input: './src/log.ts',

	output: {
		file: './dist/log.umd.js',
		format: 'umd',
		name: 'log'
	},

	plugins: [typescript({ clean: true })]
};
