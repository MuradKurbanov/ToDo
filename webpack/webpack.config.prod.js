const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, '..', 'src', 'main.tsx'),
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].chunk.js',
        clean: true,
        publicPath: '/',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
        modules: [path.resolve(__dirname, '..', 'src'), 'node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/preset-env',
                        ['@babel/preset-react', { runtime: 'automatic' }],
                        '@babel/preset-typescript',
                    ],
                },
            },
            {
                test: /\.module\.(scss|sass)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: { localIdentName: '[name]__[local]--[hash:base64:5]', namedExport: false },
                            importLoaders: 1,
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'file-loader'],
                type: 'javascript/auto',
            },
            {
                test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [],
};
