module.exports = {
	plugins: [
		require('postcss-uncss')({"html": [ "./dist/*.html" ]}),
		require('cssnano')({ url: 'copy', useHash: true })
	]
};