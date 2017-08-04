module.exports = {
	plugins: [
		require('cssnano')({ url: 'copy', useHash: true })
	]
};