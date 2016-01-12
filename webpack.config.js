var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'js', 'app.js'),//"./js/app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: "babel?presets[]=es2015"
        }]
    },
    plugins: [
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            server: {baseDir: ['./']}
        })
    ]
};