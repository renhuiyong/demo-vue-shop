module.exports = {
    devServer: {
        open: true,
        // disableHostCheck: false,
        // host: "localhost",
        // port: 8081,
        // https: false,
        // hotOnly: false,
        // 静态资源文件夹
        // assetsSubDirectory: 'static',
        // 发布路径
        // assetsPublicPath: '/',		//这里有错
        // 代理配置表，在这里可以配置特定的请求代理到对应的API接口
        // 例如将'localhost:8080/api/xxx'代理到'www.example.com/api/xxx'
        // 使用方法：https://vuejs-templates.github.io/webpack/proxy.html
        proxy: {
            '/api': {
                target: 'http://localhost:4000', // 接口的域名
                // secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
                pathRewrite: {
                    '^/api': ''
                }
            }
        },

    },
};
