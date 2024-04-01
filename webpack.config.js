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
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },

      {
        test: /\.js$/, // apply this rule to .js files
        exclude: /node_modules/, // don't apply to files in node_modules directory
        use: {
          loader: 'babel-loader', // use babel-loader for transpiling JavaScript files
          options: {
            presets: ['@babel/preset-env'], // use @babel/preset-env to transpile ES6+ syntax
          },
        },
      },
      // Add more rules for other asset types if needed
    ],
  },
};
