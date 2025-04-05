const path = require('path');

module.exports = {
  entry: './src/gnb.app.tsx',
  output: {
    filename: 'gnb.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'system',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 9001,
  },
  externals: ['single-spa', 'react', 'react-dom'],
}; 