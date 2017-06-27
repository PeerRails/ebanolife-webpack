var path = require('path');
//var template = require("pug-loader!./src/index.pug");

//var html = template(locals)

module.exports = {
        entry: './src/main.js',
        output: {
                filename: 'ebano.js',
                path: path.resolve(__dirname, 'dist')
        }
};

