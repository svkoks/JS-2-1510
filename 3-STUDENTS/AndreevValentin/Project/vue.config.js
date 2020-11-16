module.exports = {
	devServer: {
		proxy: {
			"/api": {
				target: "http://localhost:3300",
				pathRewrite: {"^/api": ""},
				secure: false,
				changeOrigin: true
			}
		}
	}
};
