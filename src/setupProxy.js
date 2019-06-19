const proxy= require ('http-proxy-middleware');

module.exports= function (app) {
    app.use(proxy('/api', {
        target: 'http://apis.juhe.cn',
        changeOrigin:true,
        pathRewrite: {
            "^/api": "/"
        }
    }))

};
