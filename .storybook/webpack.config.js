const path = require('path');
const webpack = require('webpack');

module.exports = {
  module: {
    loaders: [{
      test: /storybook-\readme\/.+\.css$/,
      loader: 'style!css',
    }, {
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.md$/,
      loader: 'raw',
    }, {
      test: /\.css$/,
      exclude: 'storybook-readme',
      loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss',
    }],
  },
  postcss: (webpack) => {
    return [
      require('postcss-import')({
        addDependencyTo: webpack,
      }),
      require('postcss-url')(),
      require('postcss-cssnext')(),
      // add your 'plugins' here
      // ...
      // and if you want to compress,
      // just use css-loader option that already use cssnano under the hood
      require('postcss-browser-reporter')(),
      require('postcss-reporter')(),
      require('postcss-simple-vars')(),
    ];
  },
  resolveLoader: {
    fallback: path.join(__dirname, '..', 'node_modules'),
  },
  resolve: {
    fallback: path.join(__dirname, '..', 'node_modules'),
    extensions: ['', '.js', '.css'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, '../lib'),
    ],
  },
};
