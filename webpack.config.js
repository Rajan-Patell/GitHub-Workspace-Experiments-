const path = require('path');

module.exports = {
  // Entry point for the application's JavaScript and CSS
  entry: {
    app: './src/index.js',
    styles: './src/styles.css'
  },
  // Loaders for processing JavaScript, JSX, and CSS files
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  // Output directory and filenames for the compiled assets
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  }
};
