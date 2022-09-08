const nxPreset = require('@nrwl/jest/preset').default;

module.exports = {
	...nxPreset,
	moduleNameMapper: {
		"\\.svg$": require.resolve("./fileMock.tsx"),
		".+\\.(css|scss|png|jpg)$": "jest-transform-stub"
	},
	setupFilesAfterEnv: ["jest-canvas-mock"],
	transformIgnorePatterns: ["node_modules/(?!(swiper|ssr-window|dom7)/)"]
};
