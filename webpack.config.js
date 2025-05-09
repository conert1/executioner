const path = require('path')

module.exports = {
    mode: "development",
    entry: {
        
        main: path.resolve(__dirname, 'src/play.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test:/\.scss$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },

}
