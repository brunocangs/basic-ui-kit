const webpack = require('webpack');

let compiler = webpack(require('./webpack.demo'));

compiler.watch({},(err, stats) => {
    console.log(stats.toString());
})