const path = require('node:path');

module.exports = {
  entry: './src/index.ts',
  target: 'node',
  resolve: { extensions: ['.ts', '.js'] },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: { loader: 'ts-loader', options: { transpileOnly: true } },
    }],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
