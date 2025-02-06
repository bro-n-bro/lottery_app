const { defineConfig } = require('@vue/cli-service')
const { DefinePlugin } = require('webpack')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')


module.exports = defineConfig({
	filenameHashing: true,
	transpileDependencies: true,

	configureWebpack: {
		plugins: [
			new NodePolyfillPlugin(),

			new DefinePlugin({
				'__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false),
				'__VUE_OPTIONS_API__': JSON.stringify(true),
				'__VUE_PROD_DEVTOOLS__': JSON.stringify(false)
			})
		]
	},

	chainWebpack: config => {
		// config.module
		// 	.rule('vue')
		// 	.use('vue-loader')
		// 	.tap((options) => ({
		// 		...options,
		// 		compilerOptions: {
		// 			isCustomElement: (tag) => tag.startsWith('swiper-')
		// 		}
		// 	}))
	}
})
