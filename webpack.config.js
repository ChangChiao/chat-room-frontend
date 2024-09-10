const webpack = require('webpack');
const dotenv = require('dotenv').config({ path: './.env' });

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    }),
  ],
};
