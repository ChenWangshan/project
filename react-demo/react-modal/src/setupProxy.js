const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/datav/center-view',
        proxy({
            target: 'http://192.9.104.247:8082/',
            changeOrigin: true,
        })
    );

    app.use(
        '/datav/proxy/wms',
        proxy({
            // target: ' http://192.9.104.213:7300/mock/5db029e09c0d4c1eb79cf8bf',
            target: 'http://192.9.104.247:8083/',
            changeOrigin: true,
        })
    );

    app.use(
        '/datav/proxy/wmts',
        proxy({
            // target: ' http://192.9.104.213:7300/mock/5db029e09c0d4c1eb79cf8bf',
            target: 'http://192.9.104.247:8083/',
            changeOrigin: true,
        })
    );
};