/** @type {import("prettier").Config} */
module.exports = {
	endOfLine: "auto",
	useTabs: true,
	overrides: [
		{
			files: ["*.json", "*.json5", "*.yaml", "*.yml"],
			options: {
				useTabs: false,
			},
		},
	],
};
