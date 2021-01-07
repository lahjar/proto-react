const path = require('path');

module.exports = {
  output: {
    filename: 'App.js'
  },
   modules: {
    loaders: [
      { test: /\.html$/, loader: 'html' }
    ]
  }
};
