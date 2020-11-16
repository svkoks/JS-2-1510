module.exports = {
    devServer: {
        port: 8081,
        hot: true,
        open: false,
        proxy: {
            '/api': {
                target: 'http://localhost:3030',
                pathRewrite: { '^/api': '' },
                secure: false,
                changeOrigin: true
            }
        }
    }
}