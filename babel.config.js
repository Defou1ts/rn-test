module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./src'],
					extensions: [
						'.ios.js',
						'.android.js',
						'.js',
						'.ts',
						'.tsx',
						'.json',
					],
					alias: {
						'@interfaces': './src/interfaces',
						'@components': './src/components',
						'@hooks': './src/hooks',
						'@utils': './src/utils',
						'@types': './src/types',
						'@constants': './src/constants',
						'@screens': './src/screens',
						'@theme': './src/theme',
						'@config': './src/config',
						'@providers': './src/providers',
					},
				},
			],
		],
	};
};
