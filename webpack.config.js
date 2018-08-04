const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    mode: 'development',
    entry: {
        indexPage: './src/pages/index.js',
        checkinPage: './src/pages/checkin-page.js',
        contactsPage: './src/pages/contacts-page.js',
        eventsPage: './src/pages/events-page.js',
        newsPage: './src/pages/news-page.js',
        header: './src/elem/header/header.js',
        previewBlog: './src/elem/preview-blog/preview-blog.js',
        formCheckin: './src/elem/form-checkin/form-checkin.js',
        circleButton: './src/elem/circle-button/circle-button.js',
        events: './src/elem/events/events.js',
        form: './src/elem/form/form.js',
        greenSlider: './src/elem/green-slider/green-slider.js',
        map: './src/elem/map/map.js',
        message: './src/elem/message/message.js',
        news: './src/elem/news/news.js',
        percentages: './src/elem/percentages/percentages.js',
        profile: './src/elem/profile/profile.js',
        redSlider: './src/elem/red-slider/red-slider.js',
        squareButton: './src/elem/square-button/square-button.js',
        stages: './src/elem/stages/stages.js',
        tickBox: './src/elem/tick-box/tick-box.js',
        toggle: './src/elem/toggle/toggle.js',
        video: './src/elem/video/video.js',
        calendar: './src/elem/calendar/calendar.js',
        menu: './src/elem/menu/menu.js',
        leftBar: './src/elem/left-bar/left-bar.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.styl/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2,
                                sourceMap: true,
                                minimize: false
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function() {
                                    return [ autoprefixer({browsers: ['last 2 versions']})]
                                }
                            }
                        },
                        'stylus-loader'
                    ]
                })
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.eot$|\.woff2$|\.ttf$|\.wav$|\.mp3$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            },
            {
                test: /\.js$|\.es6$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        stats: 'errors-only',
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Home',
            minify: {
                collapseWhitespace: true
            },
            chunks: ['indexPage'],
            hash: true,
            template: './src/pages/index.pug',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'News',
            minify: {
                collapseWhitespace: true
            },
            chunks: ['newsPage'],
            hash: true,
            template: './src/pages/news-page.pug',
            filename: 'news-page.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Events',
            minify: {
                collapseWhitespace: true
            },
            chunks: ['eventsPage', 'header', 'menu'],
            hash: true,
            template: './src/pages/events-page.pug',
            filename: 'events-page.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Check in',
            minify: {
                collapseWhitespace: true
            },
            chunks: ['checkinPage', 'header', 'menu'],
            hash: true,
            template: './src/pages/checkin-page.pug',
            filename: 'checkin-page.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Contacts',
            minify: {
                collapseWhitespace: true
            },
            chunks: ['contactsPage', 'header', 'menu'],
            hash: true,
            template: './src/pages/contacts-page.pug',
            filename: 'contacts-page.html'
        }),
        new ExtractTextPlugin('[name].css', {allChunks: true}),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({ sourceMap: true })
        ]
    }
};