module.exports = {
    productionSourceMap:false,
    runtimeCompiler:true,
    // webpack-dev-server 相关配置
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8088,
        https: false,
        hotOnly: false,
        proxy: {
            'api' :{
                target: 'http://localhost:5503/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: app => {
            const launchMiddleware = require('launch-editor-middleware')
            app.use('/__open-in-editor', launchMiddleware())
        }
    },

    lintOnSave: undefined
}
