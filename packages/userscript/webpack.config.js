const packageJson = require("./package.json");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

const downloadUrl =
	"https://raw.githubusercontent.com/p-toy-factory/ends-with-miao/main/packages/userscript/dist/index.user.js";
const updateUrl = downloadUrl;

const banner = [
	"// ==UserScript==",
	"// @name         以“喵”字作为句子结尾喵",
	`// @author       ${packageJson.author}`,
	`// @description  ${packageJson.description}`,
	`// @downloadURL  ${downloadUrl}`,
	`// @updateURL    ${updateUrl}`,
	"// @grant        GM_registerMenuCommand",
	`// @homepage     ${packageJson.homepage}`,
	`// @license      ${packageJson.license}`,
	"// @match        *://*/*",
	`// @supportURL   ${packageJson.bugs.url}`,
	"// @run-at       document-idle",
	`// @version      ${packageJson.version}`,
	"// ==/UserScript==",
].join("\n");

module.exports = {
	mode: "production",
	entry: "./src/index.js",
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					format: {
						beautify: true,
						comments: /==\/?UserScript==|^[ ]?@(?!ts-)/,
						indent_level: 2,
					},
					mangle: false,
				},
			}),
		],
	},
	output: {
		filename: "index.user.js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new webpack.BannerPlugin({
			raw: true,
			banner,
		}),
	],
};
