const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './dist',
        overlay: {
            warnings: true,
            errors: true,
        },
        open: true,
    },
    // 使用 path.resolve 指向这个本地文件
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             use: path.resolve('./src/myLoader/my-loader.js'),
    //         },
    //     ],
    // },
    /* 
    ResolveLoader
    先去 node_modules 项目下寻找 my-loader，如果找不到，会再去 ./src/myLoader/ 目录下寻找。
    */
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'my-loader',
                        options: {
                            flag: true,
                        },
                    },
                ],
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'md-loader',
                    },
                ],
            },
        ],
    },
    resolveLoader: {
        modules: ['node_modules', './src/MyLoader'],
    },
}
