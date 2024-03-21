const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js', // Entry point for JavaScript
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
		// Process CSS files
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'],
      },
      // Add more rules for other asset types if needed
    ],
  },
};
