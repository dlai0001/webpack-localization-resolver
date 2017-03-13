var LocalizationPlugin = require('./src/localize');
var webpack = require('webpack');


module.exports = {
    entry: "./test/entry.js",
    output: {
        path: __dirname + "/test",
        filename: "bundle.js"
    },
    resolve: {
        plugins: [new LocalizationPlugin()]
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};
