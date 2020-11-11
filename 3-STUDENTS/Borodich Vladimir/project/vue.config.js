module.exports = {
    devServer: {
        port: 8080,
        hot: true,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3300',
                pathRewrite: { '^/api': '/api' },
                secure: false,
                changeOrigin: true,
            },
        },
    },
};
