const path = require('path');

module.exports = {
  output: {
    filename: 'App.js'
  },
   modules: {
    loaders: [
      { test: /\.html$/, loader: 'html' }
      {
        test: /\.(gif|png)$/, //Customise according to your need
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: PATH + '.[ext]' //Path will be assets or image path
            }
          }
       ]
      }
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
