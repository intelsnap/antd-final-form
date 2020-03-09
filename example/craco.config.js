const path = require('path');

module.exports = {
  webpack: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      antd: path.resolve(__dirname, './node_modules/antd'),
      'final-form': path.resolve(__dirname, './node_modules/final-form'),
      'react-final-form': path.resolve(__dirname, './node_modules/react-final-form'),
    },
  },
};
