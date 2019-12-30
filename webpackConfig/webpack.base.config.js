/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const BrotliPlugin = require('brotli-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

process.noDeprecation = true;

module.exports = (options) => ({
  mode: options.mode,
  entry: options.entry,
  output: Object.assign(
    {
      // Compile into js/build.js
      path: path.resolve(process.cwd(), 'build'),
      publicPath: '/'
    },
    options.output
  ), // Merge with env dependent settings
  module: {
    rules: [
      {
        test: /\.js$/, // Transform all .js files required somewhere with Babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: options.babelQuery
        }
      },
      {
        // Preprocess our own .scss files
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: 'file-loader'
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      }
    ]
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch'
    }),

    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),

    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    }),

    // copying service worker custom files for listening push notifications
    new CopyWebpackPlugin([
      { from: 'app/locale/langs/locales.json', to: 'langs' }
    ]),

    // PWA settings
    new WebpackPwaManifest({
      name: 'react-csr-template',
      short_name: 'react-csr-template',
      description: 'This is a react CSR boilerplate code.',
      background_color: '#ffffff',
      theme_color: '#000000',
      start_url: '/',
      display: 'standalone',
      orientation: 'portrait',
      author: {
        name: 'Amit Pal',
        website: 'https://www.linkedin.com/in/amit-pal-0241423a/',
        github: 'https://github.com/amit040386/react-csr-template'
      },
      icons: [
        {
          src: path.resolve('public/assets/logo512.png'),
          sizes: [192, 512]
        }
      ]
    })
  ]),
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: ['.js', '.jsx', '.scss', '.react.js'],
    mainFields: ['browser', 'jsnext:main', 'main']
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: options.performance || {},
  optimization: {
    namedModules: true,
    splitChunks: {
      name: 'vendor',
      minChunks: 2
    }
  }
});
