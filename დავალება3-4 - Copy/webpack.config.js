const path = require('path');

module.exports = {
  // The entry point for your application (your starting JavaScript file)
  entry: './src/index.js',  // This is the entry file (can be adjusted based on your file structure)

  // Output configuration: where the bundled file will be saved
  output: {
    path: path.resolve(__dirname, 'dist'),  // The folder where the bundled files will go
    filename: 'bundle.js',  // The name of the bundled output file
  },

  // Module rules for processing files
  module: {
    rules: [
      {
        // Use Babel to transpile JavaScript and JSX files
        test: /\.jsx?$/,  // This matches files ending in .js or .jsx
        exclude: /node_modules/,  // Don't transpile files in node_modules
        use: {
          loader: 'babel-loader',  // Use Babel loader for these files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],  // Use the presets for modern JavaScript and React JSX
          },
        },
      },
    ],
  },

  // Resolve .js and .jsx extensions so you don't need to specify them in imports
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // Configuration for the Webpack development server (optional)
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),  // Where to serve static files from
    port: 3000,  // Port to run the dev server on
    open: true,  // Open the browser automatically when the server starts
  },

  // Enable source maps for better debugging (optional)
  devtool: 'source-map',
};