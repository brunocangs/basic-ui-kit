const webpack = require('webpack');

let compiler = webpack(require('./webpack.demo'));

compiler.run((err, stats) => {
    console.log(stats.toString());
})